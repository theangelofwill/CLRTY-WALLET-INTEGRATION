//! Thin HTTP client for clrty-api.

use serde_json::Value;

pub struct ClrtyClient {
    pub base_url: String,
    client: reqwest::blocking::Client,
}

impl ClrtyClient {
    pub fn new(base_url: impl Into<String>) -> Self {
        Self {
            base_url: base_url.into().trim_end_matches('/').to_string(),
            client: reqwest::blocking::Client::new(),
        }
    }

    pub fn get_status(&self) -> Result<Value, String> {
        self.get("/v1/status")
    }

    pub fn get_sections_status(&self) -> Result<Value, String> {
        self.get("/v1/sections/status")
    }

    pub fn get_wallet_environments(&self) -> Result<Value, String> {
        self.get("/v1/wallet/environments")
    }

    fn get(&self, path: &str) -> Result<Value, String> {
        let url = format!("{}{}", self.base_url, path);
        self.client
            .get(&url)
            .send()
            .map_err(|e| e.to_string())?
            .json()
            .map_err(|e| e.to_string())
    }
}
