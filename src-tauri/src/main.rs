// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Arc;

use lessons::load::{load_dictionary, load_files};
use prospect_lib::{DIALOGS, DICTIONARY};
mod lessons;
mod types;

#[tokio::main]
async fn main() {
    DIALOGS
        .get_or_init(|| async { Arc::new(load_files().expect("Failed to load dialogs")) })
        .await;

    DICTIONARY
        .get_or_init(|| async { load_dictionary().expect("Failed to load dictionary") })
        .await;

    prospect_lib::run()
}

// problems:
// 1. rendering animals component takes time
// 