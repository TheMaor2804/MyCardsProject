import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useTheme } from '../../../providers/CustomThemeProvider';
import { useSearchParams } from 'react-router-dom';
import searchBarRoutes from './searchBarRoutes';


export default function SearchBar() {

    const { isDark } = useTheme();

    const [searchParams, setSearchParams] = useSearchParams();

    const [inputValue, setInputValue] = useState("");

    const handleChange = ({ target }) => setInputValue(target.value);

    if (!searchBarRoutes.includes(window.location.pathname)) {
        return null;
    }

    return (
        <Box display="inline-flex">
            <FormControl variant="standard">
                <OutlinedInput
                    sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                    placeholder="Search"
                    size="small"
                    value={inputValue}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={() => {
                                    setSearchParams({ q: inputValue });
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}
