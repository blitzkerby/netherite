import type React from "react"
import { Grid } from "@mui/material"
import FileCard from "@/components/update/FileCard"

const files = [
  { name: "Document1.docx", lastModified: "2023-05-15" },
  { name: "Spreadsheet.xlsx", lastModified: "2023-05-14" },
  { name: "Presentation.pptx", lastModified: "2023-05-13" },
  { name: "Image.jpg", lastModified: "2023-05-12" },
  { name: "Report.pdf", lastModified: "2023-05-11" },
  { name: "Notes.txt", lastModified: "2023-05-10" },
]

const FileGrid: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {files.map((file) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={file.name}>
          <FileCard name={file.name} lastModified={file.lastModified} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FileGrid

