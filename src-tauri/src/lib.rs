mod lessons;
use std::{collections::HashMap, sync::Arc};
use tokio::sync::OnceCell;

pub static DIALOGS: OnceCell<Arc<[String; 3]>> = OnceCell::const_new();
pub static DICTIONARY: OnceCell<HashMap<String, Vec<String>>> = OnceCell::const_new();


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_dialogs, call_dictionary])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


#[tauri::command]
fn get_dialogs(grade: u8) -> &'static str {
    let dialogs = DIALOGS.get().expect("couldnt retrive dialogs").as_ref();
    match grade {
        7 => &dialogs[0],
        8 => &dialogs[1],
        9 => &dialogs[2],
        _=> "{{ \"Error\": \"Argument passed to get_dialogs \" }}"
    }
}


#[tauri::command]
fn call_dictionary(word: String) -> Vec<String> {
    let definitions = DICTIONARY.get().and_then(|d| d.get(&word));
    match definitions {
        Some(v) => v.clone(),
        None => vec![],
    }
}

