// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use std::sync::Arc;

use lessons::load::load_files;
use prospect_lib::DIALOGS;
mod types;
mod lessons;




#[tokio::main]
async fn main() {

    DIALOGS.get_or_init(|| async {
        Arc::new(load_files().expect("Failed to load dialogs"))
    }).await;

    prospect_lib::run()
}
