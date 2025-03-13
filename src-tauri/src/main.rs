// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use lessons::load::load_files;

mod lessons;



#[tokio::main]
async fn main() {

    let data = load_files().await.expect("Couldn't load lesson files");


    prospect_lib::run()
}
