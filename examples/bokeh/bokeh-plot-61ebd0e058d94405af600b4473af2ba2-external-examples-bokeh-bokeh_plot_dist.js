(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("dc0590d2-13c2-4432-a373-19fa230a0914");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc0590d2-13c2-4432-a373-19fa230a0914' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;39691cc9-556a-4cf5-b18e-14ee7ae01acf&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59532&quot;}]},&quot;id&quot;:&quot;59542&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59564&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59507&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59510&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59507&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59510&quot;},{&quot;id&quot;:&quot;59514&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59511&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59546&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59552&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59522&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59499&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59503&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59501&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59505&quot;}},&quot;id&quot;:&quot;59498&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59565&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59564&quot;}},&quot;id&quot;:&quot;59543&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59565&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59511&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59514&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59557&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59512&quot;}},&quot;id&quot;:&quot;59511&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59512&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59559&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59515&quot;},{&quot;id&quot;:&quot;59516&quot;},{&quot;id&quot;:&quot;59517&quot;},{&quot;id&quot;:&quot;59518&quot;},{&quot;id&quot;:&quot;59519&quot;},{&quot;id&quot;:&quot;59520&quot;}]},&quot;id&quot;:&quot;59522&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59472&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59542&quot;}]},&quot;id&quot;:&quot;59541&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59474&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59476&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59479&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59552&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59535&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59477&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59499&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59544&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59488&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59484&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59557&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59484&quot;},{&quot;id&quot;:&quot;59485&quot;},{&quot;id&quot;:&quot;59486&quot;},{&quot;id&quot;:&quot;59487&quot;},{&quot;id&quot;:&quot;59488&quot;},{&quot;id&quot;:&quot;59489&quot;}]},&quot;id&quot;:&quot;59491&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59531&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59470&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59543&quot;}},&quot;id&quot;:&quot;59547&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59516&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59490&quot;}},&quot;id&quot;:&quot;59486&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59538&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59477&quot;}},&quot;id&quot;:&quot;59476&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59501&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59520&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59505&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;/Knx0k1ikD+DwMqhRbazPzvfT42XbsI/QmDl0CLbyT/hehSuR+HKP3e+nxov3cQ/+n5qvHSTuD8K16NwPQqnP3npJjEIrJw/exSuR+F6hD956SYxCKx8P/yp8dJNYmA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59562&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59561&quot;}},&quot;id&quot;:&quot;59529&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59536&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59481&quot;}},&quot;id&quot;:&quot;59480&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59503&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59529&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59530&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59531&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59533&quot;}},&quot;id&quot;:&quot;59532&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59467&quot;},{&quot;id&quot;:&quot;59498&quot;}]},&quot;id&quot;:&quot;59548&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59480&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59483&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59545&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59515&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59521&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59476&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59479&quot;},{&quot;id&quot;:&quot;59483&quot;},{&quot;id&quot;:&quot;59541&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59480&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59532&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59535&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59491&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59468&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59472&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59470&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59474&quot;}},&quot;id&quot;:&quot;59467&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59562&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59529&quot;}},&quot;id&quot;:&quot;59533&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59543&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59544&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59545&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59547&quot;}},&quot;id&quot;:&quot;59546&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59521&quot;}},&quot;id&quot;:&quot;59517&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59490&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59468&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59530&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59518&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59559&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59508&quot;}},&quot;id&quot;:&quot;59507&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59538&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59561&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59519&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59536&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59508&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59481&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;59548&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"39691cc9-556a-4cf5-b18e-14ee7ae01acf","root_ids":["59548"],"roots":{"59548":"dc0590d2-13c2-4432-a373-19fa230a0914"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();