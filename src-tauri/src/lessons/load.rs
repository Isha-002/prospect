use std::{fs::read_to_string, io::Error, path::Path};


pub fn load_files() -> Result<[String; 3], Error> {
    let path = Path::new("assets");
    let seventh_grade_dialogs = read_to_string(path.join("7th_dialogs.json"))?;


    let eighth_grade_dialogs = read_to_string(path.join("8th_dialogs.json"))?;


    let ninth_grade_dialogs = read_to_string(path.join("9th_dialogs.json"))?;


    Ok([
        seventh_grade_dialogs,
        eighth_grade_dialogs,
        ninth_grade_dialogs,
    ])
}
