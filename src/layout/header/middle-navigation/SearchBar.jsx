import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { useTheme } from '../../../providers/CustomThemeProvider';


export default function SearchBar() {

    const { isDark } = useTheme();

    return (
        <Box display="inline-flex">
            <FormControl variant="standard">
                <OutlinedInput
                    sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                    placeholder="Search"
                    size="small"
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}
