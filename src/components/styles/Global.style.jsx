import { GlobalStyleComponent } from 'styled-components'
import NotoSansKRBold from './fonts/NotoSansKR-Bold.otf'
import NotoSansKRLight from './fonts/NotoSansKR-Light.otf'
import NotoSansKRMedium from './fonts/NotoSansKR-Medium.otf'

export const GlobalFontStyle = createGlobalStyle`
    @font-face{
        font-family: 'NotoSansKRBold';
        font-style: normal;
        font-weight: 100;
        src: url("./fonts/NotoSansKR-Bold.woff2") format('woff2'),
        url("./fonts/NotoSansKR-Bold.woff") format('woff'),
        url("./fonts/NotoSansKR-Bold.otf") format('truetype')
    }
`