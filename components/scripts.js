function ScriptLoader() {
  return (
    <div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142594264-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
				function gtag() {
					dataLayer.push(arguments);
				}
				gtag("js", new Date());
	
				gtag("config", "UA-142594264-1");`
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.$crisp = [];
					window.CRISP_WEBSITE_ID = "5ac5d8ad-db1a-47b1-84dc-3c90f77db42b";
					(function() {
						d = document;
						s = d.createElement("script");
						s.src = "https://client.crisp.chat/l.js";
						s.async = 1;
						d.getElementsByTagName("head")[0].appendChild(s);
					})();`
        }}
      />
    </div>
  );
}

export default ScriptLoader;
