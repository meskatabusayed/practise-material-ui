import { Paper } from "@mui/material";


const SectionTitle = ({title}) => {
    console.log(title)
    return (
        <Paper sx={{textAlign: 'center' , }}>
            {title}
        </Paper>
    );
};

export default SectionTitle;