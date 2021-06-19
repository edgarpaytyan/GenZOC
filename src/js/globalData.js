const listOfCPUs = {
    intel: [
        'Penryn',
        'Clarkdale',
        'Sandy Bridge',
        'Ivy Bridge',
        'Haswell',
        'Skylake',
        'Kaby Lake',
        'Coffee Lake',
        'Comet Lake',
    ],
    intelHEDT: [
        'Nehalem and Westmere',
        'Sandy and Ivy Bridge-E',
        'Haswell-E',
        'Broadwell-E',
        'Skylake-X/W and Cascade Lake-X/W',
    ],
    amd: [
        'Bulldozer(15h) and Jaguar(16h)',
        'Ryzen and Threadripper(17h and 19h)',
    ],
};
const listOfKexts = {
    essential: ['Lilu', 'VirtualSMC'],
    virtualSMCPlugins: [
        'SMCProcessor',
        'SMCSuperIO',
        // 'SMCLightSensor',
        // 'SMCBatteryManager',
        'SMCDellSensors',
    ],
    graphic: ['WhateverGreen', 'AGPMInjector'],
    audio: ['AppleALC'],
    ethernet: [
        'IntelMausi',
        'SmallTreeIntel82576',
        'AtherosE2200Ethernet',
        'RealtekRTL8111',
        'LucyRTL8125Ethernet',
        'AppleIntele1000e',
        'RealtekRTL8100',
        'BCM5722D',
    ],
    usb: ['USBInjectAll', 'XHCI-unsupported'],
    wireless: [
        'AirportItlwm',
        'IntelBluetoothFirmware',
        'AirportBrcmFixup',
        'BrcmBluetoothInjector',
        'BrcmFirmwareData',
        'BrcmPatchRAM3' /* for 10.15+ (must be paired with BrcmBluetoothInjector)*/,
        'BrcmPatchRAM2' /* for 10.11-10.14*/,
        'BrcmPatchRAM' /* for 10.8-10.10 */,
    ],
    amd: ['XLNCUSBFIX', 'VoodooHDA'],
    extra: [
        'AppleMCEReporterDisabler',
        'CpuTscSync',
        'NVMeFix',
        'SATA-Unsupported',
    ],
};
const listOfDrivers = {
    uefi: ['HfsPlus.efi', 'OpenRuntime.efi'],
    legacy: [
        'OpenUsbKbDxe.efi',
        'HfsPlusLegacy.efi',
        'OpenPartitionDxe',
        'HfsPlus32',
    ],
};
const listOfTabs = {
    first: [
        'System Type',
        'Kexts',
        'Firmware Driver',
        'SMBIOS',
        'Additional BootArgs',
    ],
    activeFirstTabIndex: 0,
    kexts: [
        'Essential',
        'VirtualSMC Plugins',
        'Graphic',
        'Audio',
        'Ethernet',
        'USB',
        'WiFi and Bluetooth',
        'AMD',
        'Extra',
    ],
    activeKextsTabIndex: 0,
    drivers: ['UEFI', 'Legacy(BIOS)'],
    activeDriversTabIndex: 0,
};

// const listOfThemes = {
//     dark: [
//         { id: 'dark', name: '🌚  Dark' },
//         { id: 'synthwave', name: '🌃  Synthwave' },
//         { id: 'halloween', name: '🎃  Halloween' },
//         { id: 'forest', name: '🌲  Forest' },
//         { id: 'aqua', name: '🐟  Aqua' },
//         { id: 'black', name: '🏴  Black' },
//         { id: 'luxury', name: '💎  Luxury' },
//         { id: 'dracula', name: '🧛‍♂️  Dracula' },
//     ],
//     light: [
//         { id: 'light', name: '🌝  Light' },
//         { id: 'cupcake', name: '🧁  Cupcake' },
//         { id: 'bumblebee', name: '🐝  Bumblebee' },
//         { id: 'emerald', name: '✳️  Emerald' },
//         { id: 'corporate', name: '🏢  Corporate' },
//         { id: 'retro', name: '👴  Retro' },
//         { id: 'cyberpunk', name: '🤖  Cyberpunk' },
//         { id: 'valentine', name: '🌸  Valentine' },
//         { id: 'garden', name: '🌷  Garden' },
//         { id: 'lofi', name: '👓  Lofi' },
//         { id: 'pastel', name: '🖍  Pastel' },
//         { id: 'fantasy', name: '🧚‍♀️  Fantasy' },
//         { id: 'wireframe', name: '📝  Wireframe' },
//     ],
// };
// Add data to Alpine
Alpine.store('listOfCPUs', listOfCPUs);
Alpine.store('listOfKexts', listOfKexts);
Alpine.store('listOfDrivers', listOfDrivers);
Alpine.store('listOfTabs', listOfTabs);
