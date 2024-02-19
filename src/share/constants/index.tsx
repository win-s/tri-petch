import variable from '@/share/style/variable.module.scss';

export enum Device {
    Mobile = "MOBILE",
    Tablet = "TABLET",
    Desktop = "DESKTOP",
}

export enum ScreenSize {
    Mobile = parseInt(variable.mobileSize),
    Tablet = parseInt(variable.tabletSize),
    Desktop = parseInt(variable.desktopSize),
}