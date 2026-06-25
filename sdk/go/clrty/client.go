package clrty

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Client struct {
	BaseURL string
	HTTP    *http.Client
}

func New(baseURL string) *Client {
	return &Client{BaseURL: baseURL, HTTP: http.DefaultClient}
}

func (c *Client) GetStatus() (map[string]interface{}, error) {
	resp, err := c.HTTP.Get(c.BaseURL + "/v1/status")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	var out map[string]interface{}
	if err := json.Unmarshal(body, &out); err != nil {
		return nil, err
	}
	return out, nil
}

func (c *Client) RpcCall(method string, params interface{}) (map[string]interface{}, error) {
	payload := map[string]interface{}{
		"jsonrpc": "2.0", "method": method, "params": params, "id": 1,
	}
	b, _ := json.Marshal(payload)
	resp, err := c.HTTP.Post(c.BaseURL+"/rpc", "application/json", bytesReader(b))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	var out map[string]interface{}
	if err := json.Unmarshal(body, &out); err != nil {
		return nil, fmt.Errorf("decode: %w", err)
	}
	return out, nil
}

type bytesReader struct{ b []byte }
func (r bytesReader) Read(p []byte) (int, error) { n := copy(p, r.b); r.b = r.b[n:]; if len(r.b) == 0 { return n, io.EOF }; return n, nil }
func (r bytesReader) Close() error { return nil }
func bytesReader(b []byte) io.ReadCloser { return bytesReader{b: b} }
