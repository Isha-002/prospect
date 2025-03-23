use std::{collections::HashMap, io::Error};

#[allow(dead_code)]
pub fn load_files() -> Result<[String; 3], Error> {
    let seventh_grade_dialogs = include_str!("../../assets/7th_grade_dialogs.json").to_string();

    let eighth_grade_dialogs = include_str!("../../assets/8th_grade_dialogs.json").to_string();

    let ninth_grade_dialogs = include_str!("../../assets/9th_grade_dialogs.json").to_string();

    Ok([
        seventh_grade_dialogs,
        eighth_grade_dialogs,
        ninth_grade_dialogs,
    ])
}

#[allow(dead_code)]
pub fn load_dictionary() -> Result<HashMap<String, Vec<String>>, serde_json::Error> {
    let file = include_str!("../../assets/dictionary.json");

    let dictionary: HashMap<String, Vec<String>> = serde_json::from_str(file)?;

    Ok(dictionary)
}
