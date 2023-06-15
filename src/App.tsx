import { ThemeProvider } from 'styled-components';
import { fonts, colors, breakpoints } from './theme';
import {
  RouterProvider,
} from "react-router-dom";
import { RootRoutes } from './routes/RootRoutes';
import { SwitchProvider } from './hooks/useSwitch';
import { AuthProvider } from './hooks/useAuth';
import { withCookies } from 'react-cookie';
import { MessagesProvider } from './hooks/useMessages';
import { NewsProvider } from './hooks/useNews';
import { SettingsProvider } from './hooks/useSettings';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

function App() {
  return (
    <ThemeProvider theme={{ mode: 'light', colors, fonts, breakpoints }}>
      <AuthProvider>
        <MessagesProvider>
          <SwitchProvider>
            <NewsProvider>
              <SettingsProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <RouterProvider router={RootRoutes} />
                </LocalizationProvider>
              </SettingsProvider>
            </NewsProvider>
          </SwitchProvider>
        </MessagesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default withCookies(App);
