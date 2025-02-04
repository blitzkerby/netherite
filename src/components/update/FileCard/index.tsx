import type React from "react"
import { useState } from "react"
import { Card, CardContent, Typography, IconButton, Menu, MenuItem } from "@mui/material"
import { MoreVert as MoreVertIcon, InsertDriveFile as FileIcon } from "@mui/icons-material"

interface FileCardProps {
    name: string
    lastModified: string
}

const FileCard: React.FC<FileCardProps> = ({ name, lastModified }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >
                <FileIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="subtitle1" component="div" noWrap>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {lastModified}
                </Typography>
            </CardContent>
            <IconButton aria-label="file options" onClick={handleClick} sx={{ alignSelf: "flex-end", padding: 1 }}>
                <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Rename</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
            </Menu>
        </Card>
    )
}

export default FileCard

