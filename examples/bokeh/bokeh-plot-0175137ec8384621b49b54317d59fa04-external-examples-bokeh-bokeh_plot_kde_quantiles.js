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
    
      
      
    
      var element = document.getElementById("beb234cf-8282-4290-9b47-c4599db7b397");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'beb234cf-8282-4290-9b47-c4599db7b397' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;f1a8e652-38fb-4195-b279-b7ea289c1db3&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61978&quot;}},&quot;id&quot;:&quot;61982&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61954&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61985&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61959&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61984&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61947&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61960&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;BneK/EVU5D8cKddW2HHkPzLbI7Fqj+Q/SI1wC/2s5D9eP71lj8rkP3TxCcAh6OQ/iqNWGrQF5T+gVaN0RiPlP7YH8M7YQOU/zbk8KWte5T/ja4mD/XvlP/kd1t2PmeU/ENAiOCK35T8mgm+StNTlPzw0vOxG8uU/UuYIR9kP5j9omFWhay3mP35Kovv9SuY/lPzuVZBo5j+qrjuwIobmP8BgiAq1o+Y/1hLVZEfB5j/sxCG/2d7mPwR3bhls/OY/BHduGWz85j8Ed24ZbPzmP+zEIb/Z3uY/1hLVZEfB5j/AYIgKtaPmP6quO7AihuY/lPzuVZBo5j9+SqL7/UrmP2iYVaFrLeY/UuYIR9kP5j88NLzsRvLlPyaCb5K01OU/ENAiOCK35T/5Hdbdj5nlP+NriYP9e+U/zbk8KWte5T+2B/DO2EDlP6BVo3RGI+U/iqNWGrQF5T908QnAIejkP14/vWWPyuQ/SI1wC/2s5D8y2yOxao/kPxwp11bYceQ/BneK/EVU5D8Gd4r8RVTkPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[50]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqxPgWposBUCrE+BamiwFQIOVst3sgAVAJiVdbb/PBUBbXyuMwxYGQAPmwDJ9VwZAjjorHlSSBkD2Onv6ecUGQL4lERmd8wZABhd0/gkbB0CXOskLfj4HQH+wKvi5XwdA+AQCxR5+B0CAHewJ6psHQM7AWQ3SuAdAurNQ+fbVB0D+tLmdAvMHQATXuDGkFAhAWCgAnrU2CEBd0viw8VcIQAc1S+CqeQhAob97jL2WCEB1BYRX1K8IQP/MtI95wghAL54c99TOCEAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[50]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62004&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62003&quot;}},&quot;id&quot;:&quot;61983&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61957&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Gim7c/4Z5z8w2wfOkDfnP0aNVCgjVec/XD+hgrVy5z9y8e3cR5DnP4ijOjfarec/nlWHkWzL5z+0B9Tr/ujnP8q5IEaRBug/4GttoCMk6D/2Hbr6tUHoPw7QBlVIX+g/JIJTr9p86D86NKAJbZroP1Dm7GP/t+g/Zpg5vpHV6D98SoYYJPPoP5L80nK2EOk/qK4fzUgu6T++YGwn20vpP9QSuYFtaek/6sQF3P+G6T8Ad1I2kqTpPxYpn5Akwuk/Ltvr6rbf6T9EjThFSf3pP1o/hZ/bGuo/cPHR+W046j+Gox5UAFbqP5xVa66Sc+o/sge4CCWR6j/IuQRjt67qP95rUb1JzOo/9B2eF9zp6j8K0OpxbgfrPyCCN8wAJes/ODSEJpNC6z9O5tCAJWDrP2SYHdu3fes/ekpqNUqb6z+Q/LaP3LjrP6auA+pu1us/vGBQRAH06z/SEp2ekxHsP+jE6fglL+w//nY2U7hM7D8UKYOtSmrsPyrbzwfdh+w/QI0cYm+l7D9YP2m8AcPsP27xtRaU4Ow/hKMCcSb+7D+aVU/LuBvtP7AHnCVLOe0/xrnof91W7T/cazXab3TtP/IdgjQCku0/CNDOjpSv7T8I0M6OlK/tPwjQzo6Ur+0/8h2CNAKS7T/cazXab3TtP8a56H/dVu0/sAecJUs57T+aVU/LuBvtP4SjAnEm/uw/bvG1FpTg7D9YP2m8AcPsP0CNHGJvpew/KtvPB92H7D8UKYOtSmrsP/52NlO4TOw/6MTp+CUv7D/SEp2ekxHsP7xgUEQB9Os/pq4D6m7W6z+Q/LaP3LjrP3pKajVKm+s/ZJgd27d96z9O5tCAJWDrPzg0hCaTQus/III3zAAl6z8K0OpxbgfrP/Qdnhfc6eo/3mtRvUnM6j/IuQRjt67qP7IHuAglkeo/nFVrrpJz6j+Gox5UAFbqP3Dx0fltOOo/Wj+Fn9sa6j9EjThFSf3pPy7b6+q23+k/FimfkCTC6T8Ad1I2kqTpP+rEBdz/huk/1BK5gW1p6T++YGwn20vpP6iuH81ILuk/kvzScrYQ6T98SoYYJPPoP2aYOb6R1eg/UObsY/+36D86NKAJbZroPySCU6/afOg/DtAGVUhf6D/2Hbr6tUHoP+BrbaAjJOg/yrkgRpEG6D+0B9Tr/ujnP55Vh5Fsy+c/iKM6N9qt5z9y8e3cR5DnP1w/oYK1cuc/Ro1UKCNV5z8w2wfOkDfnPxopu3P+Gec/Gim7c/4Z5z8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[118]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwTorLULTPwDBOistQtM/EcTSvjJv0z8tC4zvHMTTP3K7cNFhRdQ/pCWrj9Ts1D91lSs4CLHVP/E9LinCmNY/MzKaZBKd1z8TGCr7gbPYP0QTV8Sj4tk/8gGFyhgj2z+GVNTaP3TcPxWTGCf33N0/sn1XJodY3z8xpUppCHDgP5c5NXTlPOE/Iyb0oSce4j9nNj4o5gbjP0WTGy4d/OM/mTZ+xoAA5T9Ih98d/BHmP0frGwhYNOc/N/pUa5dk6D9a5LcNmqXpP2Z5UXWe+uo/qjLRjqpd7D8dkcOjWNPtPw08jtEbV+8/PGfSFOt18D/daOph4EbxP9xGDgEgHvI/6eXR6xr98j8O1OnInOLzP0oYvtto0PQ/uI6SGdK+9T+7p/LvfLX2P/zptPKXrfc/iWNudByq+D/jGwEKfqH5P/TG4g8Bmfo/22yxuyiL+z9Aj/Tv6Xz8P7MbDG/pav0/OSQ65g9V/j+g0QAWbjn/Py6DGoAPDABApSVOpBB6AEARchW4WuUAQIr89dcvTwFAbGFDh3q3AUAQlvjaPR4CQNR4fBSGhAJAlVnx4hnrAkCJwpdnNVADQCeV+9TYswNAh4LfNhoWBED2GLPmGnUEQABufA5D0gRAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[118]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62006&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62005&quot;}},&quot;id&quot;:&quot;61988&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61963&quot;}},&quot;id&quot;:&quot;61958&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61983&quot;}},&quot;id&quot;:&quot;61987&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61990&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61951&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61988&quot;}},&quot;id&quot;:&quot;61992&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61979&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62000&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61983&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61984&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61985&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61987&quot;}},&quot;id&quot;:&quot;61986&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62001&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61964&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61954&quot;},{&quot;id&quot;:&quot;61955&quot;},{&quot;id&quot;:&quot;61956&quot;},{&quot;id&quot;:&quot;61957&quot;},{&quot;id&quot;:&quot;61958&quot;},{&quot;id&quot;:&quot;61959&quot;},{&quot;id&quot;:&quot;61960&quot;},{&quot;id&quot;:&quot;61961&quot;}]},&quot;id&quot;:&quot;62011&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61955&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61963&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61950&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61953&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61989&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62002&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;62011&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;62012&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61962&quot;}},&quot;id&quot;:&quot;61956&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61938&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61961&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61988&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61989&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61990&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61992&quot;}},&quot;id&quot;:&quot;61991&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61946&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61949&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61944&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61995&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61951&quot;}},&quot;id&quot;:&quot;61950&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61980&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61994&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62003&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62004&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61973&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61974&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61975&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61977&quot;}},&quot;id&quot;:&quot;61976&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61942&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61940&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61997&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61954&quot;},{&quot;id&quot;:&quot;61955&quot;},{&quot;id&quot;:&quot;61956&quot;},{&quot;id&quot;:&quot;61957&quot;},{&quot;id&quot;:&quot;61958&quot;},{&quot;id&quot;:&quot;61959&quot;},{&quot;id&quot;:&quot;61960&quot;},{&quot;id&quot;:&quot;61961&quot;}]},&quot;id&quot;:&quot;61964&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;62012&quot;},{&quot;id&quot;:&quot;62010&quot;}]},&quot;id&quot;:&quot;62013&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61995&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61946&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61949&quot;},{&quot;id&quot;:&quot;61953&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61950&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61976&quot;},{&quot;id&quot;:&quot;61981&quot;},{&quot;id&quot;:&quot;61986&quot;},{&quot;id&quot;:&quot;61991&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61994&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61964&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61938&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61942&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61940&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61944&quot;}},&quot;id&quot;:&quot;61937&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61974&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61997&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61947&quot;}},&quot;id&quot;:&quot;61946&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62005&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;OoPBdEHLyj+TS/TdikHLP+sTJ0fUt8s/RNxZsB0uzD+dpIwZZ6TMP/Vsv4KwGs0/TjXy6/mQzT+m/SRVQwfOP//FV76Mfc4/WI6KJ9bzzj+wVr2QH2rPPwkf8Plo4M8/sXORMVkr0D/d1yrmfWbQPwo8xJqiodA/NqBdT8fc0D9iBPcD7BfRP45okLgQU9E/u8wpbTWO0T/nMMMhWsnRPxSVXNZ+BNI/QPn1iqM/0j9sXY8/yHrSP5jBKPTstdI/xSXCqBHx0j/xiVtdNizTPx3u9BFbZ9M/SlKOxn+i0z92tid7pN3TP6IawS/JGNQ/zn5a5O1T1D/74vOYEo/UPydHjU03ytQ/VKsmAlwF1T+AD8C2gEDVP6xzWWule9U/2NfyH8q21T8FPIzU7vHVPzGgJYkTLdY/XgS/PTho1j+KaFjyXKPWP7bM8aaB3tY/4jCLW6YZ1z8PlSQQy1TXPzv5vcTvj9c/aF1XeRTL1z+UwfAtOQbYP8AliuJdQdg/7Ikjl4J82D8Y7rxLp7fYP0VSVgDM8tg/crbvtPAt2T+eGolpFWnZP8p+Ih46pNk/9uK70l7f2T8iR1WHgxraP0+r7juoVdo/fA+I8MyQ2j+ocyGl8cvaP9TXulkWB9s/ADxUDjtC2z8soO3CX33bP1kEh3eEuNs/hWggLKnz2z+yzLngzS7cP94wU5Xyadw/CpXsSRel3D82+YX+O+DcP2NdH7NgG90/j8G4Z4VW3T+7JVIcqpHdP+iJ69DOzN0/FO6EhfMH3j9AUh46GEPeP222t+48ft4/mRpRo2G53j/FfupXhvTeP/LigwyrL98/Hkcdwc9q3z9Kq7Z19KXfP3cPUCoZ4d8/0rl07x4O4D/oa8FJsSvgP/4dDqRDSeA/FNBa/tVm4D8qgqdYaITgP0A09LL6oeA/VuZADY2/4D9smI1nH93gP4NK2sGx+uA/mfwmHEQY4T+vrnN21jXhP8VgwNBoU+E/xWDA0GhT4T/FYMDQaFPhP6+uc3bWNeE/mfwmHEQY4T+DStrBsfrgP2yYjWcf3eA/VuZADY2/4D9ANPSy+qHgPyqCp1hohOA/FNBa/tVm4D/+HQ6kQ0ngP+hrwUmxK+A/0rl07x4O4D93D1AqGeHfP0qrtnX0pd8/Hkcdwc9q3z/y4oMMqy/fP8V+6leG9N4/mRpRo2G53j9ttrfuPH7eP0BSHjoYQ94/FO6EhfMH3j/oievQzszdP7slUhyqkd0/j8G4Z4VW3T9jXR+zYBvdPzb5hf474Nw/CpXsSRel3D/eMFOV8mncP7LMueDNLtw/hWggLKnz2z9ZBId3hLjbPyyg7cJffds/ADxUDjtC2z/U17pZFgfbP6hzIaXxy9o/fA+I8MyQ2j9Pq+47qFXaPyJHVYeDGto/9uK70l7f2T/KfiIeOqTZP54aiWkVadk/crbvtPAt2T9FUlYAzPLYPxjuvEunt9g/7Ikjl4J82D/AJYriXUHYP5TB8C05Btg/aF1XeRTL1z87+b3E74/XPw+VJBDLVNc/4jCLW6YZ1z+2zPGmgd7WP4poWPJco9Y/XgS/PTho1j8xoCWJEy3WPwU8jNTu8dU/2NfyH8q21T+sc1lrpXvVP4APwLaAQNU/VKsmAlwF1T8nR41NN8rUP/vi85gSj9Q/zn5a5O1T1D+iGsEvyRjUP3a2J3uk3dM/SlKOxn+i0z8d7vQRW2fTP/GJW102LNM/xSXCqBHx0j+YwSj07LXSP2xdjz/IetI/QPn1iqM/0j8UlVzWfgTSP+cwwyFaydE/u8wpbTWO0T+OaJC4EFPRP2IE9wPsF9E/NqBdT8fc0D8KPMSaoqHQP93XKuZ9ZtA/sXORMVkr0D8JH/D5aODPP7BWvZAfas8/WI6KJ9bzzj//xVe+jH3OP6b9JFVDB84/TjXy6/mQzT/1bL+CsBrNP52kjBlnpMw/RNxZsB0uzD/rEydH1LfLP5NL9N2KQcs/OoPBdEHLyj86g8F0QcvKPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[188]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[188]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62000&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61999&quot;}},&quot;id&quot;:&quot;61973&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61937&quot;},0,0]]},&quot;id&quot;:&quot;62010&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61975&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61999&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62006&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61973&quot;}},&quot;id&quot;:&quot;61977&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;3BINK/tw4T/yxFmFjY7hPwh3pt8frOE/HinzObLJ4T802z+UROfhP0qNjO7WBOI/YD/ZSGki4j928SWj+z/iP4yjcv2NXeI/o1W/VyB74j+5BwyyspjiP8+5WAxFtuI/5mulZtfT4j/8HfLAafHiPxLQPhv8DuM/KIKLdY4s4z8+NNjPIErjP1TmJCqzZ+M/aphxhEWF4z+ASr7e16LjP5b8CjlqwOM/ra5Xk/zd4z/DYKTtjvvjP9kS8UchGeQ/78Q9orM25D/vxD2iszbkP+/EPaKzNuQ/2RLxRyEZ5D/DYKTtjvvjP62uV5P83eM/lvwKOWrA4z+ASr7e16LjP2qYcYRFheM/VOYkKrNn4z8+NNjPIErjPyiCi3WOLOM/EtA+G/wO4z/8HfLAafHiP+ZrpWbX0+I/z7lYDEW24j+5BwyyspjiP6NVv1cge+I/jKNy/Y1d4j928SWj+z/iP2A/2UhpIuI/So2M7tYE4j802z+UROfhPx4p8zmyyeE/CHem3x+s4T/yxFmFjY7hP9wSDSv7cOE/3BINK/tw4T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[52]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiZp+UGc8IQCJmn5QZzwhAdpKK2RrFCEAEFwZB4qwIQFWry95diQhAzvD7gmZYCEBvJG5X7B0IQPUmsQzq1wdAi9FjjEeJB0AXE+POUzEHQNMmSf5D1AZAZrjRIhNyBkCqV2/6SQ4GQOaQCqZ0qwVAZxxbKR5KBUB/zLifWusEQOIhVY0ZkARA+hsB4E85BEDBrn7mcOcDQOhcBJn7mQNAzogzbvtPA0DvBrSF8wgDQOFD90J4xQJACWoW5yGDAkDZGaLHOEECQEd/raDb/QFAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[52]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62002&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62001&quot;}},&quot;id&quot;:&quot;61978&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61962&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61978&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61979&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61980&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61982&quot;}},&quot;id&quot;:&quot;61981&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;62013&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"f1a8e652-38fb-4195-b279-b7ea289c1db3","root_ids":["62013"],"roots":{"62013":"beb234cf-8282-4290-9b47-c4599db7b397"}}];
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