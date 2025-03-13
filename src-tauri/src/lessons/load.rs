use std::path::Path;

use tokio::fs::read_to_string;


pub async fn load_files() -> Result<[String; 3], String> {
  let path = Path::new("assets");
  let seventh_grade_dialogs = read_to_string(path.join("7th_dialogs.json"))
      .await
      .map_err(|e| e.to_string())?;

  let eighth_grade_dialogs = read_to_string(path.join("8th_dialogs.json"))
      .await
      .map_err(|e| e.to_string())?;

  let ninth_grade_dialogs = read_to_string(path.join("9th_dialogs.json"))
      .await
      .map_err(|e| e.to_string())?;

  Ok([
      seventh_grade_dialogs,
      eighth_grade_dialogs,
      ninth_grade_dialogs,
  ])
}
