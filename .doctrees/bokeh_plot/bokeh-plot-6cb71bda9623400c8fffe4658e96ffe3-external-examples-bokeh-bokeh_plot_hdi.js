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
    
      
      
    
      var element = document.getElementById("cc1884eb-59cd-4fee-9124-c38d783f2fb4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc1884eb-59cd-4fee-9124-c38d783f2fb4' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;a6f066cf-2549-4eef-a9d1-0762d0a338a2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60978&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61006&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60973&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60976&quot;},{&quot;id&quot;:&quot;60980&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60977&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61003&quot;},{&quot;id&quot;:&quot;61008&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61011&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60991&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60965&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60969&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60967&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60971&quot;}},&quot;id&quot;:&quot;60964&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60971&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60969&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61005&quot;}},&quot;id&quot;:&quot;61009&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60989&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61012&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60978&quot;}},&quot;id&quot;:&quot;60977&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61007&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61016&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61014&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60974&quot;}},&quot;id&quot;:&quot;60973&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60967&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61017&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60977&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60980&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60973&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60976&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60974&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61011&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61001&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61017&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61016&quot;}},&quot;id&quot;:&quot;61000&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60965&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60990&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61002&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60982&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60988&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61012&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60981&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60989&quot;}},&quot;id&quot;:&quot;60983&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61018&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61019&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60981&quot;},{&quot;id&quot;:&quot;60982&quot;},{&quot;id&quot;:&quot;60983&quot;},{&quot;id&quot;:&quot;60984&quot;},{&quot;id&quot;:&quot;60985&quot;},{&quot;id&quot;:&quot;60986&quot;},{&quot;id&quot;:&quot;60987&quot;},{&quot;id&quot;:&quot;60988&quot;}]},&quot;id&quot;:&quot;60991&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60986&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60990&quot;}},&quot;id&quot;:&quot;60985&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60984&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60987&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61014&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61000&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61001&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61002&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61004&quot;}},&quot;id&quot;:&quot;61003&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;COsyhHHICMCVIhRh1ycIwHik5nd9CgPA+NJN7eWZ/b98HCjwe7n8v5vN8jvkCvy/Fpr6b1RR+L+kkpxGmHn2v7YUmouX2vS/UkFejE3A9L9PScXPtKL0v5wF1/mUN/S/RlT/v/YZ9L9cwnZXcQ/0v19V+Um1FvG/F5nioQCH8L//su3551Xwv7NU2CoU0++/4FoEB1H/7r/gdiIwihfuv06x56tec+u/zcT9CZf36r94YHcuwWnqv2LsiapLWeq/sDzjMsEM6L8AKPC+qevnv7PbLrkqE+a/XsasdIKz5L+0tgpJ1HDkvwek4QsLXuS/s/LS1E8+5L+9oWM0snDjv0kp73YPF+O/heDmT2N64b+GjDPgwlrgvzFxvSjtw9+/JvWlUM+N3r9smyPui0fdv+wCuj/Pw9q/jFKiW7/M2L+KkUgbh2PUv/MaFpqoYNG/2qtGgvwd0b8hWE3S+wjNv4YQ3bZU+ca/CzWM4UM0wL9NGovoXjO8v+fsKru/8bq/QIGg7Du0tb89gMBk6Oukv+S0uGur8Wa/Jwu5Jyw5lD91qWgG1/KwP8RyMVhpWrE/vsJ2sA6KtD/bDnEJzSW8P94w8iQnLL8/nj5hl0VExz8PWnfBU9fHP3qM8CJXg8o/9iYWdDJd0D+op/hpzOzRPyF3d3c1AdI/m6Hc6fAg0j/VANedFJHSP/GoVnqhctQ/hmnchbyW1T+aPLYMd2TYPzXtMXLFfdg/F2G702j32D+94Ziji5PaP4q4enSPndo/s5Ur3J3O2j82VGZylYPbPxL45daIFt0/Ghjo9RM33j8ylYxqlNfgP3cRjcys8OA/8uXUkg4V4j9UrbI56W7jPzLShE//G+Q/0cI2m3Il5D9+w637FYjoP0A5nnHMwug/l4BheaCi6j9kSavwNvvqP6PeiZEjGOs/4CAs+Xt17D9m1MBdCIjsPzwpgd4NJe8/kQOHRGLA8T+N7uSwynL0P5bsLhm7+/U/3lCMUjlT9z80j1wbHND3P99bXENv//c/XhmwRcIC+T82zH/Jog36P3sHjzxyHwFAph8q0QwsA0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;4FM07zne3D+sda97omDfPxC3MhAF6+k/hBZZCQ0z8T/C8esHQqPxPzKZBuKN+vE/9bICyFXX8z+utrHcM8P0P6X1Mjq0kvU/V9/QOdmf9T9YWx2Ypa71PzJ9FIM15PU/3VUAoATz9T/SnkRUR/j1P1BVA1uldPc/dLMOr3+89z+AJgkDDNX3P9PqSfU6C/g/SOk+vitA+D9IYvdzHXr4P6wTBlUoI/k/zY6APRpC+T/iJ2K0j2X5P+iEXRWtafk/1DBHs8/8+T8A9kOQFQX6PxNJtFE1e/o/aM7UYh/T+j9TUr3tyuP6P/6WBz196Po/U0PLCmzw+j+RF+dy0yP7P641RCI8Ovs/30cGLGeh+z/eHPNHT+n7P9pR6FqCB/w/W0HrFUYu/D+SjDuCDlf8P6K/CBiGp/w/rrWLFGjm/D/P7ZYcj3P9P6I8vezq0/0/hSq3b0Dc/T9+KttCcC/+P/gukrRqkP4/rzznwbv8/j8up7sIZR7/P5moJgJyKP8/9vuaIF5S/z///WxeUKz/P9MRJZVD+v8/C7knLDkUAECmohlcy0MAQMvFYKVpRQBAC9vBOihSAEA7xCU0l3AAQMPIk5ywfABA9Qm7LCK6AEDQugueur4AQGSEF7ka1ABAb2JBJ9MFAUB6ip/GzB4BQHJ3d1cTIAFAGsqdDg8iAUANcN1JESkBQI9qpRcqRwFAmMZdyGtZAUDKY8twR4YBQNMeI1fchwFAEbY7jXaPAUAcjjm6OKkBQImrR/fYqQFAW7nC3emsAUBDZSZXObgBQIFfbo1o0QFAgoFeP3HjAUCmklGN8hoCQC+ikZkVHgJAvpxa0qFCAkCqVTYn3W0CQEaa8Ol/gwJAWthmU66EAkBwuHW/AhEDQCjHM45ZGANAEzAsD1RUA0AsaRXeZl8DQNQ7MXIEYwNAHIQlf6+OA0CNGrgLAZEDQCgl0Luh5ANA5MAhkRhwBECjOzmsshwFQCa7S8bufgVAOBSjVM7UBUDNI9cGB/QFQPgW19Db/wVAWAZskbBABkAO81+yaIMGQL6DRx65jwhA0w+VaAaWCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61019&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61018&quot;}},&quot;id&quot;:&quot;61005&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61000&quot;}},&quot;id&quot;:&quot;61004&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61005&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61006&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61007&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61009&quot;}},&quot;id&quot;:&quot;61008&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;60964&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"a6f066cf-2549-4eef-a9d1-0762d0a338a2","root_ids":["60964"],"roots":{"60964":"cc1884eb-59cd-4fee-9124-c38d783f2fb4"}}];
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