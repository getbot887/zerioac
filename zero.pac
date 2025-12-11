function FindProxyForURL(url, host) {
    // ===== 微软 CDN 域名直连 =====
    if (dnsDomainIs(host, "msftcdn.com") ||
        dnsDomainIs(host, "assets.microsoft.com") ||
        dnsDomainIs(host, "static.microsoft.com") ||
        dnsDomainIs(host, "officecdn.microsoft.com") ||
        dnsDomainIs(host, "windowsupdate.com") ||
        dnsDomainIs(host, "update.microsoft.com") ||
        dnsDomainIs(host, "dl.delivery.mp.microsoft.com") ||
        dnsDomainIs(host, "storeedgefd.dsx.mp.microsoft.com")) {
        return "DIRECT";
    }

    // ===== OneDrive 直连 =====
    if (dnsDomainIs(host, "onedrive.com") ||
        dnsDomainIs(host, "1drv.ms") ||
        dnsDomainIs(host, "sharepoint.com")) {
        return "DIRECT";
    }

    // ===== 其他微软服务走代理 =====
    if (dnsDomainIs(host, "microsoft.com") ||
        dnsDomainIs(host, "msedge.net") ||
        dnsDomainIs(host, "msn.com") ||
        dnsDomainIs(host, "live.com") ||
        dnsDomainIs(host, "office.com") ||
        dnsDomainIs(host, "office365.com") ||
        dnsDomainIs(host, "xbox.com") ||
        dnsDomainIs(host, "skype.com") ||
        dnsDomainIs(host, "azure.com") ||
        dnsDomainIs(host, "bing.com") ||
        dnsDomainIs(host, "copilot.microsoft.com") ||
        dnsDomainIs(host, "edge.microsoft.com") ||
        dnsDomainIs(host, "config.edge.microsoft.com") ||
        dnsDomainIs(host, "arc.msn.com") ||
        dnsDomainIs(host, "assets.msn.com") ||
        dnsDomainIs(host, "api.msn.com") ||
        dnsDomainIs(host, "microsoftonline.com")) {
        return "PROXY 127.0.0.1:7890"; // 修改为你的代理地址和端口
    }

    // ===== 其他流量默认直连 =====
    return "PROXY 127.0.0.1:7890";
}
