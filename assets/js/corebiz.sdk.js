/*
 * Corebiz Vtex APIs
 * Created By Rafael Cruz
 * Contact: rafaeldriveme@gmail.com
 * Version: 1.0.3
 * Release: 2018-17-03
 */

// DOCS
// ***********************************************************************************************

// API search
// https://documenter.getpostman.com/view/845/search-103/Hs43#2690e18f-8ff0-d43d-85c0-2a4ec18fef29

// API catalog
// https://documenter.getpostman.com/view/845/catalogsystem-101/Hs44#1f786fa4-8928-2db4-c5c1-5ef7ab65f275

(function ($) {

    'use strict';

    var allOrderFormSections = ['items', 'totalizers', 'clientProfileData', 'shippingData', 'paymentData', 'sellers', 'messages', 'marketingData', 'clientPreferencesData', 'storePreferencesData', 'giftRegistryData', 'ratesAndBenefitsData', 'openTextField', 'commercialConditionData'];
    var _config = {};
    var _data = new Date();
    var helper = {};

    helper.upperAllFirstLetter = function (text) {

        if (!text) {

            return;

        }

        var loweredText = text.toLowerCase();
        var words = loweredText.split(" ");
        var w, firstLetter;

        for (var a = 0; a < words.length; a++) {

            w = words[a];
            firstLetter = w[0];

            if (firstLetter) {

                w = firstLetter.toUpperCase() + w.slice(1);
                words[a] = w;

            }

        }

        return words.join(" ");

    };

    helper.toFormData = function (data) {

        var formData = "";

        for (var key in data) {

            formData += "&" + key + "=" + data[key];

        }

        if (formData) {

            formData = formData.substring(1);

        }

        return formData;

    };

    helper.getNumberOfString = function (str) {

        if (!str) {

            return;

        }

        return str.replace(/[^0-9]/g, '');

    };

    helper.getIdUserCripty = function (str) {

        if (!str) {

            return;

        }

        str.match(/\'(.*)'/, '');

        if (typeof str === "object") {

            return str[1];

        } else {

            return "";

        }

    };

    helper.toObjectReview = function (string_html) {

        var parser = new DOMParser();
        var html = parser.parseFromString(string_html, "text/html");
        var obj_reviews = {
            'userId': null,
            'rating': null,
            'media': null,
            'comments': []
        };

        $(html).find(".resenhas > .quem > li").each(function () {

            var $this = $(this);

            obj_reviews.comments.push({
                'author': $this.find(".dados > strong").text().replace("Opinião de: ", ""),
                'rating': $.trim($this.find(".rating-wrapper div").attr("class").replace("rating", "")),
                'comment': $this.find(".opt-texto p").text(),
                'id': helper.getNumberOfString($this.find("#lnkAjudou").attr("href"))
            });

        });

        obj_reviews.userId = helper.getIdUserCripty($(html).find("#ulPubliqueResenha #lnkPubliqueResenha").attr("href"));
        obj_reviews.rating = $(html).find(".avaliacao > ul.rating").html();
        obj_reviews.media = $(html).find(".media > em").html();

        return obj_reviews;

    };

    helper.getPriceTotalBuyTogether = function (string_price) {

        if (!string_price) {

            return;

        }

        string_price = string_price.match(/total:(.*)/, '');

        if (typeof string_price === "object") {

            return $.trim(string_price[1]);

        } else {

            return "";

        }

    };

    helper.getSkusBuyTogether = function (url) {

        var skus = [];

        if (!url) {

            return;

        }

        skus = url.match(/sku=[0-9]{0,}/g, '');

        if (typeof skus === "object") {

            skus[0] = helper.getNumberOfString(skus[0]);
            skus[1] = helper.getNumberOfString(skus[1]);

        } else {

            return "";

        }

        return skus;

    };

    helper.toObjectBuyTogether = function (string_html) {
        
        var parser = new DOMParser();
        var html = parser.parseFromString(string_html, "text/html");
        var number, price;
        var $this;
        var buytogheter = []
        var obj_buy_together = {};

        $(html).find("tr").each(function(){

            obj_buy_together = {
                'url': null,
                'category': null,
                'total_price': null,
                'installment': null,
                'skus': [],
                'items': []
            };

            $this = $(this);

            number = $this.find(".buy > strong:eq(0)").text();
            price = $this.find(".buy > strong:eq(1)").text();

            obj_buy_together.url = $this.find(".comprar-junto > #lnkComprar").attr("href");

            obj_buy_together.installment = {
                'number': parseInt($.trim(number)),
                'price': $.trim(price)
            };

            obj_buy_together.total_price = helper.getPriceTotalBuyTogether($this.find(".buy").text());
            obj_buy_together.category = $this.find(".more > a#lnkVejaMais").attr("href");
            obj_buy_together.skus = helper.getSkusBuyTogether(obj_buy_together.url);

            obj_buy_together.items.push({
                'thumb': $this.find(".itemA > a > img").attr("src"),
                'title': $this.find(".itemA > h3").text(),
                'url': $this.find(".itemA > a").attr("href")
            });

            obj_buy_together.items.push({
                'thumb': $this.find(".itemB > a > img").attr("src"),
                'title': $this.find(".itemB > h3").text(),
                'url': $this.find(".itemB > a").attr("href")
            });

            buytogheter.push(obj_buy_together);

        });

        return buytogheter;

    };

    helper.monthNumber = function (month) {

        if (!month) {

            return;

        }

        var number;

        switch (month) {

            case "jan":
                number = 0;
                break;

            case "fev":
                number = 1;
                break;

            case "mar":
                number = 2;
                break;

            case "abr":
                number = 3;
                break;

            case "mai":
                number = 4;
                break;

            case "jun":
                number = 5;
                break;

            case "jul":
                number = 6;
                break;

            case "ago":
                number = 7;
                break;

            case "set":
                number = 8;
                break;

            case "out":
                number = 9;
                break;

            case "nov":
                number = 10;
                break;

            case "dez":
                number = 11;
                break;

        }

        return number;

    };

    helper.formatData = function (dataserver) {

        dataserver = dataserver.replace(",", "");
        dataserver = dataserver.split(" ");
        dataserver[0] = String(this.monthNumber(dataserver[0]));

        return new Date(dataserver[2], dataserver[0], dataserver[1], hours[0], hours[1], hours[2]);

    };

    var CorebizSDK = function () {

        return null;

    };

    CorebizSDK.prototype.config = function (params) {

        this.params = params;

        // Constructor
        if (this.params) {

            /*
            'x-vtex-api-appKey': 'vtexappkey-NOMELOJA-VRCLGS',
            'x-vtex-api-appToken': ''
            */

            var headers = {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
                'REST-Range': 'resources=0-49'
            };

            _config.DEBUG = this.params.DEBUG || false;
            _config.headers = this.params.headers || headers;
            _config.store_url = this.params.store_url || "";

            _config.url_api_search = _config.store_url + "/api/catalog_system/pub/products/search";
            _config.url_api_search_autocomplete = _config.store_url + "/buscaautocomplete";
            _config.url_api_search_buscapagina = _config.store_url + "/buscapagina";
            _config.url_api_category = _config.store_url + "/api/catalog_system/pub/category/tree/3";
            _config.url_api_brand = _config.store_url + "/api/catalog_system/pvt/brand/list";
            _config.url_product_sku = _config.store_url + "/produto/sku/";
            _config.url_product_variations = _config.store_url + "/api/catalog_system/pub/products/variations/";
            _config.url_profile = _config.store_url + "/api/checkout/pub/profiles";
            _config.url_get_profile = _config.store_url + "/no-cache/profileSystem/getProfile";
            _config.url_order_form = _config.store_url + "/api/checkout/pub/orderForm";
            _config.url_orders = _config.store_url + "/api/checkout/pub/orders/";
            _config.url_orders_oms = _config.store_url + "/api/oms/pvt/orders/";
            _config.url_postcode = _config.store_url + "/no-cache/postalcode/address/";
            _config.url_simulation_shipping = _config.store_url + "/api/checkout/pub/orderForms/simulation";
            _config.url_warn_me = _config.store_url + "/no-cache/AviseMe.aspx";
            _config.url_sku_details = _config.store_url + "/api/catalog_system/pvt/sku/stockkeepingunitbyid/";
            _config.url_publish_userreviewcomment = _config.store_url + "/publishuserreviewcomment";
            _config.url_userreview = _config.store_url + "/userreview";
            _config.url_publish_userreviewrelevance = _config.store_url + "/PublishUserReviewRelevance";
            _config.url_add_coupon = _config.store_url + "/coupons";
            _config.url_attachments_shippingData = "/attachments/shippingData";
            _config.url_attachments_openTextField = "/attachments/openTextField";
            _config.url_address_save = _config.store_url + "/no-cache/account/address/save";
            _config.url_profile_save = _config.store_url + "/no-cache/account/profile/save";
            _config.url_address_remove = _config.store_url + "/no-cache/account/address/delete/";
            _config.url_address_detail = _config.store_url + "/no-cache/account/address/detail/";
            _config.url_user_logout = _config.store_url + "/no-cache/user/logout";
            _config.url_orderform_clear = _config.store_url + "/checkout/changeToAnonymousUser/";
            _config.url_buy_together = _config.store_url + "/comprejuntosku/";
            _config.url_service_sku = _config.store_url + "/servico/";
            _config.url_api_newsletter = _config.store_url + "/no-cache/Newsletter.aspx";
            _config.url_api_dataserver = _config.store_url + "/no-cache/HoraAtualServidor.aspx";
            _config.url_api_carriers = _config.store_url + "/api/logistics/pvt/configuration/carriers";
            _config.url_api_facets_filters_category = _config.store_url + "/api/catalog_system/pub/facets/search/${category}?map=c";

            _config.url_api_crossselling_whosawalsosaw = _config.store_url + "/api/catalog_system/pub/products/crossselling/whosawalsosaw/";
            _config.url_api_crossselling_whosawalsobought = _config.store_url + "/api/catalog_system/pub/products/crossselling/whosawalsobought/";
            _config.url_api_crossselling_whoboughtalsobought = _config.store_url + "/api/catalog_system/pub/products/crossselling/whoboughtalsobought/";
            _config.url_api_crossselling_accessories = _config.store_url + "/api/catalog_system/pub/products/crossselling/accessories/";
            _config.url_api_crossselling_similars = _config.store_url + "/api/catalog_system/pub/products/crossselling/similars/";
            _config.url_api_crossselling_suggestions = _config.store_url + "/api/catalog_system/pub/products/crossselling/suggestions/";
            _config.url_api_address_information = _config.store_url + "/api/checkout/pub/postal-code/";

            _config.header = this.params.headers;
            _config.apiMasterData = "https://api.vtexcrm.com.br/" + this.params.namestore + "/dataentities/";

        } else {

            console.error("Metodo config não definido!");

        }

    };

    CorebizSDK.prototype.log = function (msg) {

        if (!msg) {

            return;

        }

        return this.DEBUG && console.log(msg);

    };

    CorebizSDK.prototype.error = function (msg) {

        if (!msg) {

            return;

        }

        return this.DEBUG && console.error(msg);

    };

    CorebizSDK.prototype.warn = function (msg) {

        if (!msg) {

            return;

        }

        return this.DEBUG && console.warn(msg);

    };

    CorebizSDK.prototype.parameters = function (configs) {

        if (!configs) {

            return "";

        }

        var params = "";

        for (var config in configs) {

            params += "&" + config + "=" + configs[config];

        }

        return "?" + params.substring(1);

    };

    CorebizSDK.prototype.ajax = function (url, type, data, successCallback, errorCallback, isStringify) {

        if (!url || !type) {

            return;

        }

        var contentType, dataType;

        if (isStringify && typeof data === "object") {

            data = JSON.stringify(data);
            contentType = "application/json";
            dataType = "json";

        } else {

            contentType = "application/x-www-form-urlencoded; charset=UTF-8";
            dataType = "";

        }

        $.ajax({
            'url': url,
            'type': type,
            'contentType': contentType,
            'dataType': dataType,
            'data': (data) ? data : "",
            'success': function (response) {

                successCallback(response);

            },
            'error': function (error) {

                errorCallback(error);

            }

        });

    };

    /*
     * Search all products of store.
     * @method
     * @param {object} config - Params of url to search.
    /*

    Filter by full text
    ---------------------------------------------------------------------------
    ft={searchWord}
    Ex.: - - ft=television

    Filter by category
    fq=C:/{a}/{b} - {a} and {b} are categoryIds
    Ex.: - - fq=C:/1000041/1000049/

    Filter by specification
    fq=specificationFilter_{a}:{b} - {a} is the specificationId, {b} = specification value
    Ex.: To filter products where the color is Blue, find the specificationId for color, supose it's 123 then it will be like this fq=specificationFilter_123:Blue

    Filter by price range
    fq=P:[{a} TO {b}] - {a} is the minimum price "from" and {b} is the highest price "to" Ex.: fq=P:[0 TO 20] will search products between 0,00 and 20,00.

    Filter by collection
    fq=productClusterIds:{{productClusterId}} where productClusterId also know as collectionId
    More information about collections http://help.vtex.com/tutorial/criando-colecao-de-produtos/

    Filter by product Id
    fq=productId:{{productId}}

    Filter by referenceId
    fq=alternateIds_RefId:{{referenceId}}

    Filter by ean13
    fq=alternateIds_Ean:{{ean13}}
    
    Filter by availability at a specific sales channel
    fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}
    {{sc}} is the desired sales channel
    {{bool}} is true ou false, 1 or 0.

    Ex.: seaching available products for the sales channel 4
    fq=isAvailablePerSalesChannel_4:1

    Sorting
    ---------------------------------------------------------------------------
    Price
    O=OrderByPriceDESC
    O=OrderByPriceASC
    
    Top Selling Products
    O=OrderByTopSaleDESC

    Best Reviews
    O=OrderByReviewRateDESC

    Name
    O=OrderByNameASC
    O=OrderByNameDESC

    Release Date
    O=OrderByReleaseDateDESC

    Best Discounts
    O=OrderByBestDiscountDESC

    Pagging
    ------------------------------------------------------------------------------
    Start and end padding
    _from=1
    _to=30

    RESUME
    ------------------------------------------------------------------------------
    fq=C:/<id_category>/<id_category>/ - Products by Categorys
    fq=B:<id_brand> - Products by Brands
    fq=H:<id_colection> - Products by collections
    fq=P:[0 TO 20] - Range price products between 0,00 and 20,00
    fq=productId:<value> - Products by field
    fq=specificationFilter_<id_campo_produto>:<value> - Products by filters
    fq=0 - All Products
    productNameContains={{searchString}} - Search products to autocomplete

    BUSCA pagina
    -------------------------------------------------------------------------------
    {
         sl:<id_shelf>,
         PS:7,
         cc:<id_category>,
         sm:0,
         PageNumber:<number_pagging>,
         fq:H:<Id_collection>
    }
    */

    CorebizSDK.prototype.search = function () {

        var _this = this;

        return {
            'products': function (config, success_fn, error_fn) {

                if (!config) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_search + _this.parameters(config), function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'autocomplete': function (search_query, success_fn, error_fn, isDeveloper) {

                if (!search_query) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var data = { 'productNameContains': search_query };
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {

                    success_fn([
                        {
                            "items": [],
                            "thumb": "",
                            "thumbUrl": null,
                            "name": "Pocket em Toy",
                            "href": "http://corebiz.vtexcommercestable.com.br/toy/Pocket",
                            "criteria": "£Pocket em Toy¢/toy/Pocket"
                        },
                        {
                            "items": [
                                {
                                    "itemId": "21",
                                    "name": "Greg",
                                    "nameComplete": "Pocket Steven Universo Greg",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156430-25-25/greg.jpg"
                                },
                                {
                                    "itemId": "22",
                                    "name": "Connie",
                                    "nameComplete": "Pocket Steven Universo Connie",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156431-25-25/connie.jpg"
                                },
                                {
                                    "itemId": "23",
                                    "name": "Garnet",
                                    "nameComplete": "Pocket Steven Universo Garnet",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156432-25-25/garnet.jpg"
                                },
                                {
                                    "itemId": "24",
                                    "name": "Leon",
                                    "nameComplete": "Pocket Steven Universo Leon",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156434-25-25/leon.jpg"
                                },
                                {
                                    "itemId": "25",
                                    "name": "Rose",
                                    "nameComplete": "Pocket Steven Universo Rose",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156435-25-25/rose.jpg"
                                },
                                {
                                    "itemId": "26",
                                    "name": "Peridot",
                                    "nameComplete": "Pocket Steven Universo Peridot",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156436-25-25/peridot.jpg"
                                },
                                {
                                    "itemId": "27",
                                    "name": "Pérola",
                                    "nameComplete": "Pocket Steven Universo Pérola",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156437-25-25/perola.jpg"
                                },
                                {
                                    "itemId": "28",
                                    "name": "steven",
                                    "nameComplete": "Pocket Steven Universo steven",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg"
                                }
                            ],
                            "thumb": "<img src=\"http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg\" width=\"25\" height=\"25\" alt=\"steven\" id=\"\" />",
                            "thumbUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg",
                            "name": "pocket steven universo",
                            "href": "http://corebiz.vtexcommercestable.com.br/pocket_steven_universo/p",
                            "criteria": null
                        }
                    ]);

                    return;

                }

                $.getJSON(_config.url_api_search_autocomplete + _this.parameters(data), function (search) {

                    if (_callback) {

                        if (search) {

                            success_fn(search.itemsReturned);

                        } else {

                            success_fn(false);

                        }

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'buscapagina': function (config, success_fn, error_fn) {

                if (!config) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.ajax(_config.url_api_search_buscapagina + _this.parameters(config), "GET", "", function (response) {

                    var html = $.parseHTML(response);

                    if (_callback) {

                        success_fn(html);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

            },
            'goPageSearch': function (search_word) {

                if (!search_word) {

                    return;

                }

                window.location.href = "/" + search_word;

            }

        };

    };

    CorebizSDK.prototype.crossSelling = function () {
        
        var _this = this;

        return {
            'productSearchWhoSawAlsoSaw': function (productId, success_fn, error_fn) {

                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_whosawalsosaw + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'productSearchWhoSawAlsoBought': function (productId, success_fn, error_fn) {
                
                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_whosawalsobought + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'productSearchWhoBoughtAlsoBought': function (productId, success_fn, error_fn) {
                
                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_whoboughtalsobought + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'productSearchAccessories': function (productId, success_fn, error_fn) {
                
                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_accessories + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'productSearchSimilars': function (productId, success_fn, error_fn) {
                
                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_similars + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'productSearchSuggestions': function (productId, success_fn, error_fn) {
                
                if (!productId) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_crossselling_suggestions + productId, function (search) {

                    if (_callback) {

                        success_fn(search);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            }
        }
    }

    CorebizSDK.prototype.default = function () {

        var _this = this;

        return {
            'init': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_search + _this.parameters(config), function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            }
        };

    };

    /*
     * Get all brand of store.
    */

    CorebizSDK.prototype.brands = function () {

        // var _this = this;

        return {
            'list': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_api_brand, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            }
        };

    };

    /*
     * Get all categories of store.
    */

    CorebizSDK.prototype.category = function () {

        // var _this = this;

        return {
            'list': function (success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {
                    
                    success_fn([
                        {
                            "id": 1,
                            "name": "Testes e Integração (Departamento)",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/testes-e-integracao--departamento-",
                            "children": [

                            ]
                        },
                        {
                            "id": 4,
                            "name": "Moda",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/moda",
                            "children": [
                                {
                                    "id": 5,
                                    "name": "Vestuario",
                                    "hasChildren": false,
                                    "url": "http://corebiz.vtexcommercestable.com.br/moda/vestuario",
                                    "children": [

                                    ]
                                },
                                {
                                    "id": 6,
                                    "name": "Celulares",
                                    "hasChildren": false,
                                    "url": "http://corebiz.vtexcommercestable.com.br/moda/celulares",
                                    "children": [

                                    ]
                                },
                                {
                                    "id": 7,
                                    "name": "Acessorios",
                                    "hasChildren": false,
                                    "url": "http://corebiz.vtexcommercestable.com.br/moda/acessorios",
                                    "children": [

                                    ]
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "name": "Eletrônicos",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/eletronicos",
                            "children": [

                            ]
                        },
                        {
                            "id": 10,
                            "name": "Parceiros VTEX Store",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/parceiros-vtex-store",
                            "children": [

                            ]
                        },
                        {
                            "id": 12,
                            "name": "Toy",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/toy",
                            "children": [
                                {
                                    "id": 13,
                                    "name": "steven universo",
                                    "hasChildren": false,
                                    "url": "http://corebiz.vtexcommercestable.com.br/toy/steven-universo",
                                    "children": [

                                    ]
                                }
                            ]
                        },
                        {
                            "id": 14,
                            "name": "recorrencia",
                            "hasChildren": false,
                            "url": "http://corebiz.vtexcommercestable.com.br/recorrencia",
                            "children": []
                        }
                    ]);

                    return;

                }
                    
                $.getJSON(_config.url_api_category, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'filters': function (category, success_fn, error_fn, isDeveloper) {

                if (!category) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {             

                    success_fn({
                        "Departments": [
                            {
                                "Quantity": 30,
                                "Name": "Moda",
                                "Link": "/Moda"
                            }
                        ],
                        "Brands": [
                            {
                                "Quantity": 2,
                                "Name": "Marca Moda",
                                "Link": "/moda/Marca-Moda"
                            },
                            {
                                "Quantity": 1,
                                "Name": "Marca Eletrônicos",
                                "Link": "/moda/Marca-Eletronicos"
                            }
                        ],
                        "SpecificationFilters": {
                            "Exibe na vitrine": [
                                {
                                    "Quantity": 1,
                                    "Name": "Não",
                                    "Link": "/moda/Não?map=c,specificationFilter_1029"
                                },
                                {
                                    "Quantity": 1,
                                    "Name": "Sim",
                                    "Link": "/moda/Sim?map=c,specificationFilter_1029"
                                }
                            ]
                        },
                        "CategoriesTrees": [
                            {
                                "Quantity": 3,
                                "Name": "Moda",
                                "Link": "/Moda",
                                "Children": [
                                    {
                                        "Quantity": 2,
                                        "Name": "Vestuario",
                                        "Link": "/Moda/Vestuario",
                                        "Children": []
                                    },
                                    {
                                        "Quantity": 1,
                                        "Name": "Celulares",
                                        "Link": "/Moda/Celulares",
                                        "Children": []
                                    }
                                ]
                            }
                        ]
                    });

                    return;

                }
                    
                $.getJSON(_config.url_api_facets_filters_category.replace("${category}", category), function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            }
        };

    };

    CorebizSDK.prototype.products = function () {

        var _this = this;

        return {
            'service': function (sku_id, success_fn, error_fn) {

                if (!sku_id) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.get(_config.url_service_sku + sku_id, function (response) {

                    if (_callback) {

                        if (response) {

                            success_fn(response);

                        } else {

                            success_fn(false);

                        }

                    }

                });

            },
            'buyTogether': function (sku_id, success_fn, error_fn, isDeveloper) {

                if (!sku_id) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {
                
                    success_fn({
                        "url": "https://corebiz.vtexcommercestable.com.br/checkout/cart/add?sku=3&sku=19&qt…97a901a7e09572e8f34c43c1037f41_geral:467225D68C45B0DCBF4368FECA3DFB67&sc=1",
                        "category": "http://corebiz.vtexcommercestable.com.br/moda",
                        "total_price": "R$ 110,98",
                        "installment": {
                            "number": "12x",
                            "price": "R$ 9,24"
                        },
                        "skus": [
                            "3",
                            "19"
                        ],
                        "items": [
                            {
                                "thumb": "http://corebiz.vteximg.com.br/arquivos/ids/155398-90-90/carexemplo.png",
                                "title": "Produto Variação Cor e Tam SKU Variação Cor1 e Tam 1",
                                "url": "http://corebiz.vtexcommercestable.com.br/produto-variacao-cor-e-tam/p"
                            },
                            {
                                "thumb": "http://corebiz.vteximg.com.br/arquivos/ids/155397-90-90/corebiz-vtex-store.jpg",
                                "title": "Agência Corebiz Vermelho",
                                "url": "http://corebiz.vtexcommercestable.com.br/corebiz/p"
                            }
                        ]
                    });

                    return;

                }

                $.post(_config.url_buy_together + sku_id, function (response) {

                    if (_callback) {

                        if (response) {

                            success_fn(helper.toObjectBuyTogether(response));

                        } else {

                            success_fn(false);

                        }

                    }

                });

            },
            'sku': function (sku_id, success_fn, error_fn) {

                if (!sku_id) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_product_sku + sku_id, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'product': function (id_product, success_fn, error_fn) {

                if (!id_product) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.search().products({ 'fq': 'productId:' + id_product }, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                });

            },
            'variations': function (id_product, success_fn, error_fn) {

                if (!id_product) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_product_variations + id_product, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'simulationShipping': function (data, success_fn, error_fn) {

                if (!data) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.ajax(_config.url_simulation_shipping, "POST", data, function (response) {

                    if (_callback) {

                        if (response.logisticsInfo) {

                            success_fn(response.logisticsInfo);

                        } else {

                            success_fn(false);

                        }

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'warnMe': function (data, success_fn, error_fn) {

                if (!data) {

                    return;

                }

                var formData = helper.toFormData(data);

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.ajax(_config.url_warn_me, "POST", formData, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'skuDetails': function (sku_id, success_fn, error_fn) {

                if (!sku_id) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_sku_details + sku_id, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'publishReviewComment': function (data, success_fn, error_fn) {

                if (!data || !Object.keys(data).length) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    if (response.loggedIn) {

                        var rating = encodeURI('<Score><EvaluationRating><EvaluationId>' + data.productId + '</EvaluationId><Rating>' + data.ratingValue + '</Rating></EvaluationRating></Score>');

                        rating = String(rating);

                        var data_request = {
                            'userId': data.userId,
                            'productId': data.productId,
                            'title': data.title,
                            'comment': data.comment,
                            'allowShowUserEmail': 'false',
                            'ratingValue': encodeURI(rating),
                            'save': 'true',
                            'categoryId': data.categoryId
                        };

                        var formData = helper.toFormData(data_request);

                        _this.ajax(_config.url_publish_userreviewcomment, "POST", formData, function (response) {

                            if (_callback) {

                                success_fn(response);

                            }

                        },
                            function (error) {

                                if (_callback) {

                                    error_fn(error);

                                }

                            }, true);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'userReview': function (data, success_fn, error_fn, isDeveloper) {

                if (!data) {

                    return;

                }

                var data_request = {
                    'productLinkId': data.produto_variacao,
                    'qtdReviewsToBeShown': data.qtdReviewsToBeShown,
                    'productId': data.productId,
                    'categoryId': data.categoryId
                };

                var formData = helper.toFormData(data_request);
                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {

                    success_fn({
                        "userId": "",
                        "rating": "<strong id=\"spnRatingProdutoBottom\" class=\"rating-produto avaliacao30\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao50\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao50\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao50\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao40\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao40\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao40\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao30\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao30\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 100%\">\n                     </span>\n                     <span> 1 Voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao30\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao20\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao20\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao20\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao10\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao10\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao10\">\n             </strong></strong></strong></strong></strong></strong>",
                        "media": "\n                 <strong id=\"spnRatingProdutoBottom\" class=\"rating-produto avaliacao30\">\n                 <span>\n1 voto\n</span>\n             </strong>",
                        "comments": [
                            {
                                "author": "Rafael",
                                "rating": "a30",
                                "comment": "Meu comentario 2",
                                "id": "24"
                            }
                        ]
                    });

                    return;

                }

                _this.ajax(_config.url_userreview, "POST", formData, function (response) {

                    if (_callback) {

                        success_fn(helper.toObjectReview(response));                        

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'ratingValue': function (data, success_fn, error_fn) {

                if (!data || !Object.keys(data).length) {

                    return;

                }

                var data_request = {
                    'productId': data.productId,
                    'categoryId': data.categoryId,
                    'productLinkId': data.productLinkId,
                    'ratingValue': data.ratingValue,
                    'qtdReviewsToBeShown': data.qtdReviewsToBeShown
                };

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.ajax(_config.url_userreview, "POST", data_request, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'ratingViewRelevance': function (data, success_fn, error_fn) {

                if (!data || !Object.keys(data).length) {

                    return;

                }

                var data_request = {
                    'ProductId': data.ProductId,
                    'PaginaAtual': data.PaginaAtual,
                    'TamPagina': data.TamPagina,
                    'SortOrder': data.SortOrder,
                    'isRelevant': data.isRelevant,
                    'reviewId': data.reviewId,
                    'qtdReviewsToBeShown': data.qtdReviewsToBeShown,
                    'source': 'UserReview',
                    'currentPage': data.currentPage
                };

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.ajax(_config.url_publish_userreviewrelevance, "POST", data_request, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            }
        };

    };

    CorebizSDK.prototype.profile = function () {

        var _this = this;

        return {
            'getProfileByEmail': function (config, success_fn, error_fn) {

                if (!config) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_profile + _this.parameters(config), function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'getProfile': function (success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (_isDeveloper) {

                    success_fn({
                        "UserId": "555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
                        "IsReturningUser": true,
                        "IsUserDefined": true,
                        "IsPJ": false,
                        "FirstName": "Rafael",
                        "LastName": "Cruz",
                        "Gender": "M",
                        "Email": "rafael.cruz@corebiz.com.br"
                    });

                    return;

                }

                $.getJSON(_config.url_get_profile, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'isUserLogged': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    if (_callback) {

                        success_fn(response.loggedIn);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                });

            },
            'postcode': function (postcode_number, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!postcode_number) {

                    return;

                }

                $.getJSON(_config.url_postcode + postcode_number, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'getClientProfileData': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    if (_callback) {

                        success_fn(response.clientProfileData);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                });

            },
            'getAddresses': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _this = this;

                this.getProfile(function (response) {

                    if (!response) {

                        if (_callback) {

                            success_fn(false);

                            return;

                        }

                    }

                    var email = response.Email;

                    if (!email) {

                        success_fn(false);

                    }

                    _this.getProfileByEmail({ 'email': email }, function (response) {

                        if (_callback && response) {

                            success_fn({
                                'email': email,
                                'availableAddresses': response.availableAddresses
                            });

                        } else {

                            success_fn(false);

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

                }, function (error) {

                    console.error(error);

                });

            },
            'getAddress': function (name_address, success_fn, error_fn) { // url_address_save

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_address_detail + name_address, function (response) {

                    if (_callback) {

                        if (response) {

                            success_fn(response);

                        } else {

                            success_fn(false);

                        }

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                });

            },
            'saveAddress': function (data, success_fn, error_fn) { // 

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                var formData = helper.toFormData(data);

                _this.ajax(_config.url_address_save, "POST", formData, function () {

                    if (_callback) {

                        success_fn(true);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'saveProfile': function (data, success_fn, error_fn) { // url_address_remove

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                var formData = helper.toFormData(data);

                _this.ajax(_config.url_profile_save, "POST", formData, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'removeAddress': function (addressName, success_fn, error_fn) { // url_address_remove

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!addressName) {

                    return;

                }

                $.get(_config.url_address_remove + addressName, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, true);

            },
            'loggout': function (success_fn, error_fn) { // url_address_remove

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!_callback) {

                    window.location.href = _config.url_user_logout;

                } else {

                    $.get(_config.url_user_logout, function (response) {

                        if (_callback) {

                            success_fn(response);

                        }

                    },
                        function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        }, true);

                }

            }
        };

    };

    CorebizSDK.prototype.order = function () {

        //var _this = this;

        return {
            'list': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.getJSON(_config.url_orders, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'orderByIdOrEmail': function (order_id_or_email, success_fn, error_fn) {

                // url_orders_oms
                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!order_id_or_email) {

                    return;

                }

                $.getJSON(_config.url_orders + order_id_or_email, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            },
            'oms': function (order_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!order_id) {

                    return;

                }

                // v888047smpr-01

                $.getJSON(_config.url_orders_oms + order_id, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                },
                    function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

            }
        };

    };

    CorebizSDK.prototype.cart = function () {

        var _this = this;

        return {
            'listOrdination': function (success_fn, error_fn, isDeveloper, criteria, ascending) {

                /*
                criteria: name ou add_time
                ascending: true para crescente e false para decrescente
                */

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                criteria = criteria || "add_time";
                ascending = ascending || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (orderform) {

                        // response.orderFormId,
                        // _config.url_order_form

                        var data = {
                            "ascending": ascending,
                            "criteria":  criteria,
                            'expectedOrderFormSections': allOrderFormSections
                        };
                        
                        _this.ajax(_config.url_order_form + "/" + orderform.orderFormId + "/itemsOrdination", "POST", data, function (response) {
        
                            if (_callback) {

                                var cart = {};
                                
                                var quantity_cart = response.items.reduce(function (prevValue, currentValue) {
            
                                    return prevValue + currentValue.quantity;
            
                                }, 0);

                                if(response.totalizers.length > 1){
                                    var sub = response.totalizers[0].value
                                }else{
                                    var sub = "0"
                                }
            
                                response.resume = {
                                    'total_cart': response.value,
                                    'sub_total_cart': sub,
                                    'quantity_cart': quantity_cart
                                };
        
                                success_fn(response);
        
                            }
        
                        }, function (error) {
        
                            if (_callback) {
        
                                error_fn(error);
        
                            }
        
                        }, true);
        
                        return null;

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn({
                        "resume": {
                            "total_cart": 19798,
                            "sub_total_cart": 13980,
                            "quantity_cart": 2
                        },
                        "items": [
                            {
                                "uniqueId": "3C181015F9294BECB6AB3DAEECC3971A",
                                "id": "30",
                                "productId": "9",
                                "refId": "camisetaazulpp",
                                "ean": null,
                                "name": "camiseta azul-pp",
                                "skuName": "azul-pp",
                                "modalType": null,
                                "priceValidUntil": "2018-05-01T02:03:56.4800255Z",
                                "tax": 0,
                                "price": 9899,
                                "listPrice": 20000,
                                "manualPrice": null,
                                "sellingPrice": 9899,
                                "rewardValue": 0,
                                "isGift": false,
                                "additionalInfo": {
                                    "brandName": "Marca Eletrônicos",
                                    "brandId": "2000001",
                                    "offeringInfo": null,
                                    "offeringType": null,
                                    "offeringTypeId": null
                                },
                                "preSaleDate": null,
                                "productCategoryIds": "/4/5/",
                                "productCategories": {
                                    "4": "Moda",
                                    "5": "Vestuario"
                                },
                                "defaultPicker": null,
                                "handlerSequence": 0,
                                "handling": false,
                                "quantity": 1,
                                "seller": "1",
                                "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156440-55-55/ico-socks-2x.png",
                                "detailUrl": "/camiseta/p",
                                "components": [],
                                "bundleItems": [],
                                "attachments": [],
                                "itemAttachment": {
                                    "name": null,
                                    "content": {}
                                },
                                "attachmentOfferings": [],
                                "offerings": [],
                                "priceTags": [],
                                "availability": "available",
                                "measurementUnit": "un",
                                "unitMultiplier": 1
                            },
                            {
                                "uniqueId": "3C181015F9294BECB6AB3DAEECC3971A",
                                "id": "30",
                                "productId": "9",
                                "refId": "camisetaazulpp",
                                "ean": null,
                                "name": "camiseta azul-pp 2",
                                "skuName": "azul-pp",
                                "modalType": null,
                                "priceValidUntil": "2018-05-01T02:03:56.4800255Z",
                                "tax": 0,
                                "price": 9899,
                                "listPrice": 20000,
                                "manualPrice": null,
                                "sellingPrice": 9899,
                                "rewardValue": 0,
                                "isGift": false,
                                "additionalInfo": {
                                    "brandName": "Marca Eletrônicos",
                                    "brandId": "2000001",
                                    "offeringInfo": null,
                                    "offeringType": null,
                                    "offeringTypeId": null
                                },
                                "preSaleDate": null,
                                "productCategoryIds": "/4/5/",
                                "productCategories": {
                                    "4": "Moda",
                                    "5": "Vestuario"
                                },
                                "defaultPicker": null,
                                "handlerSequence": 0,
                                "handling": false,
                                "quantity": 1,
                                "seller": "1",
                                "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156440-55-55/ico-socks-2x.png",
                                "detailUrl": "/camiseta/p",
                                "components": [

                                ],
                                "bundleItems": [

                                ],
                                "attachments": [

                                ],
                                "itemAttachment": {
                                    "name": null,
                                    "content": {}
                                },
                                "attachmentOfferings": [

                                ],
                                "offerings": [

                                ],
                                "priceTags": [

                                ],
                                "availability": "available",
                                "measurementUnit": "un",
                                "unitMultiplier": 1
                            }
                        ]
                    });

                }               

            },
            'list': function (success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;
     
                if (_callback) {
                    
                    if (_isDeveloper) {

                        success_fn({
                            "resume": {
                                "total_cart": 19798,
                                "sub_total_cart": 13980,
                                "quantity_cart": 2
                            },
                            "items": [
                                {
                                    "uniqueId": "3C181015F9294BECB6AB3DAEECC3971A",
                                    "id": "30",
                                    "productId": "9",
                                    "refId": "camisetaazulpp",
                                    "ean": null,
                                    "name": "camiseta azul-pp",
                                    "skuName": "azul-pp",
                                    "modalType": null,
                                    "priceValidUntil": "2018-05-01T02:03:56.4800255Z",
                                    "tax": 0,
                                    "price": 9899,
                                    "listPrice": 20000,
                                    "manualPrice": null,
                                    "sellingPrice": 9899,
                                    "rewardValue": 0,
                                    "isGift": false,
                                    "additionalInfo": {
                                        "brandName": "Marca Eletrônicos",
                                        "brandId": "2000001",
                                        "offeringInfo": null,
                                        "offeringType": null,
                                        "offeringTypeId": null
                                    },
                                    "preSaleDate": null,
                                    "productCategoryIds": "/4/5/",
                                    "productCategories": {
                                        "4": "Moda",
                                        "5": "Vestuario"
                                    },
                                    "defaultPicker": null,
                                    "handlerSequence": 0,
                                    "handling": false,
                                    "quantity": 1,
                                    "seller": "1",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156440-55-55/ico-socks-2x.png",
                                    "detailUrl": "/camiseta/p",
                                    "components": [],
                                    "bundleItems": [],
                                    "attachments": [],
                                    "itemAttachment": {
                                        "name": null,
                                        "content": {}
                                    },
                                    "attachmentOfferings": [],
                                    "offerings": [],
                                    "priceTags": [],
                                    "availability": "available",
                                    "measurementUnit": "un",
                                    "unitMultiplier": 1
                                },
                                {
                                    "uniqueId": "3C181015F9294BECB6AB3DAEECC3971A",
                                    "id": "30",
                                    "productId": "9",
                                    "refId": "camisetaazulpp",
                                    "ean": null,
                                    "name": "camiseta azul-pp 2",
                                    "skuName": "azul-pp",
                                    "modalType": null,
                                    "priceValidUntil": "2018-05-01T02:03:56.4800255Z",
                                    "tax": 0,
                                    "price": 9899,
                                    "listPrice": 20000,
                                    "manualPrice": null,
                                    "sellingPrice": 9899,
                                    "rewardValue": 0,
                                    "isGift": false,
                                    "additionalInfo": {
                                        "brandName": "Marca Eletrônicos",
                                        "brandId": "2000001",
                                        "offeringInfo": null,
                                        "offeringType": null,
                                        "offeringTypeId": null
                                    },
                                    "preSaleDate": null,
                                    "productCategoryIds": "/4/5/",
                                    "productCategories": {
                                        "4": "Moda",
                                        "5": "Vestuario"
                                    },
                                    "defaultPicker": null,
                                    "handlerSequence": 0,
                                    "handling": false,
                                    "quantity": 1,
                                    "seller": "1",
                                    "imageUrl": "http://corebiz.vteximg.com.br/arquivos/ids/156440-55-55/ico-socks-2x.png",
                                    "detailUrl": "/camiseta/p",
                                    "components": [

                                    ],
                                    "bundleItems": [

                                    ],
                                    "attachments": [

                                    ],
                                    "itemAttachment": {
                                        "name": null,
                                        "content": {}
                                    },
                                    "attachmentOfferings": [

                                    ],
                                    "offerings": [

                                    ],
                                    "priceTags": [

                                    ],
                                    "availability": "available",
                                    "measurementUnit": "un",
                                    "unitMultiplier": 1
                                }
                            ]
                        });

                        return;

                    }

                }

                _this.orderForm().list(function (response) {

                    var cart = {};

                    var quantity_cart = response.items.reduce(function (prevValue, currentValue) {

                        return prevValue + currentValue.quantity;

                    }, 0);

                    if(response.totalizers.length > 1){
                        var sub = response.totalizers[0].value
                    }else{
                        var sub = "0,00"
                    }                        

                    cart.resume = {
                        'total_cart': response.value,
                        'sub_total_cart': sub,
                        'quantity_cart': quantity_cart
                    };

                    cart.items = response.items;
                   
                    if (_callback)
                        success_fn(cart);

                }, function (error) {

                    if (_callback) {

                        error_fnr(error);

                    }

                });

            },
            'handleremove': function (index, orderform, success_fn, error_fn) {

                index = index || 0;

                if (orderform.items.length === 0) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                var data = [{
                    'index': index,
                    'quantity': 0
                }];
                var addToCartRequest = {
                    'orderItems': data,
                    'expectedOrderFormSections': allOrderFormSections,
                    'noSplitItem': false
                };
                var order_form_id = orderform.orderFormId;

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/items/update", "POST", addToCartRequest, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'handleRemoveAllSkus': function (index, orderform, success_fn, error_fn) {

                if (orderform.items.length === 0) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var data = [];

                if (index >= 0) {

                    data.push({
                        'index': index,
                        'quantity': 0
                    });

                } else {

                    data = orderform.items.map(function (item, index) {

                        return {
                            'index': index,
                            'quantity': 0
                        };

                    });

                }

                _this.warn(data);

                var addToCartRequest = {
                    'orderItems': data,
                    'expectedOrderFormSections': allOrderFormSections,
                    'noSplitItem': false
                };
                var order_form_id = orderform.orderFormId;

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/items/update", "POST", addToCartRequest, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'remove': function (index, success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        if (index >= 0) {

                            this.handleremove(index, response, function (response) {

                                if (_callback) {

                                    success_fn(response);

                                }

                            }, function (error) {

                                if (_callback) {

                                    error_fn(error);

                                }

                            });

                        } else {

                            this.handleRemoveAllSkus(index, response, function (response) {

                                if (_callback) {

                                    success_fn(response);

                                }

                            }, function (error) {

                                if (_callback) {

                                    error_fn(error);

                                }

                            });

                        }

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn(true);

                }

            },
            'handleadd': function (sc, data, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                var addToCartRequest = {
                    'orderItems': data,
                    'expectedOrderFormSections': allOrderFormSections
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/items?sc=" + sc, "POST", addToCartRequest, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'add': function (sc, data, success_fn, error_fn, isDeveloper) {

                // [{id: "2010", quantity: 1, seller: 1}]

                if (!data || typeof data != "object") {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        this.handleadd(sc, data, response.orderFormId, function (response) {

                            if (_callback) {

                                success_fn(response);

                            }

                        }, function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        });

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn(true);

                }

            },
            'handleUpdate': function (data, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                data.hasBundleItems = false;

                var addToCartRequest = {
                    'orderItems': data,
                    'noSplitItem': true,
                    'expectedOrderFormSections': allOrderFormSections
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/items/update/", "POST", addToCartRequest, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'update': function (data, success_fn, error_fn, isDeveloper) {

                // [{id: "2010", quantity: 1, seller: 1}]

                if (!data || typeof data != "object") {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        this.handleUpdate(data, response.orderFormId, function (response) {

                            if (_callback) {

                                success_fn(response);

                            }

                        }, function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        });

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn(true);

                }

            },
            'handleAddCoupon': function (coupon_text, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                var request_data = {
                    'text': coupon_text,
                    'expectedOrderFormSections': allOrderFormSections,
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + _config.url_add_coupon, "POST", request_data, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'addCoupon': function (coupon_text, success_fn, error_fn, isDeveloper, isDelete) {

                // [{id: "2010", quantity: 1, seller: 1}]

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                isDelete = isDelete || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        this.handleAddCoupon(coupon_text, response.orderFormId, function (response) {

                            if (_callback) {

                                if ((response.marketingData && response.marketingData.coupon === coupon_text) || isDelete) {

                                    success_fn(response);

                                } else {

                                    success_fn(false);

                                }

                            }

                        }, function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        });

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn(true);

                }

            },
            'deleteCoupon': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                this.addCoupon("", function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        success_fn(error);

                    }

                }, false, true);

            },
            'getCouponActive': function (success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        if (_callback) {

                            if ((response.marketingData && response.marketingData.coupon)) {

                                success_fn({
                                    'marketingData': response.marketingData,
                                    'totalizers': response.totalizers,
                                    'value': response.value,
                                });

                            } else {

                                success_fn(false);

                            }

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }, false);

                } else {

                    if (_callback) {

                        success_fn({
                            "marketingData": {
                                "attachmentId": "marketingData",
                                "utmSource": null,
                                "utmMedium": null,
                                "utmCampaign": null,
                                "utmipage": null,
                                "utmiPart": null,
                                "utmiCampaign": null,
                                "coupon": "isDeveloperCupom",
                                "marketingTags": [

                                ]
                            },
                            "totalizers": [
                                {
                                    "id": "Items",
                                    "name": "Total dos Itens",
                                    "value": 9899
                                },
                                {
                                    "id": "Discounts",
                                    "name": "Total dos Descontos",
                                    "value": -990
                                }
                            ],
                            "value": 8909
                        });

                    }

                }

            },
            'handleSimulationShipping': function (cep, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!cep) {

                    return;

                }

                var request_data = {
                    'address': {
                        'postalCode': cep,
                        'country': "BRA"
                    },
                    'country': 'BRA',
                    'postalCode': '06416070',
                    'expectedOrderFormSections': allOrderFormSections,
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + _config.url_attachments_shippingData, "POST", request_data, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'simulationShipping': function (cep, success_fn, error_fn, isDeveloper) {

                // [{id: "2010", quantity: 1, seller: 1}]

                if (!cep) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    _this.orderForm().list(function (response) {

                        this.handleSimulationShipping(cep, response.orderFormId, function (response) {

                            if (_callback) {

                                success_fn(response);

                            }

                        }, function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        });

                    }.bind(this), function (error) {

                        error_fn(error);

                    });

                } else {

                    success_fn({
                        "orderFormId": "35480778a7354d1b8162515599255c13",
                        "salesChannel": "1",
                        "loggedIn": true,
                        "isCheckedIn": false,
                        "storeId": null,
                        "allowManualPrice": false,
                        "canEditData": true,
                        "userProfileId": "555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
                        "userType": null,
                        "ignoreProfileData": false,
                        "value": 0,
                        "messages": [

                        ],
                        "items": [

                        ],
                        "selectableGifts": [

                        ],
                        "products": [

                        ],
                        "totalizers": [

                        ],
                        "shippingData": {
                            "attachmentId": "shippingData",
                            "address": {
                                "addressType": null,
                                "receiverName": null,
                                "addressId": "0e33c6c6387c4a8da1c02d80a399eed2",
                                "postalCode": "06416070",
                                "city": "Barueri",
                                "state": "SP",
                                "country": "BRA",
                                "street": "Rua Major Ãlvaro Fontes",
                                "number": null,
                                "neighborhood": "Vila Engenho Novo",
                                "complement": null,
                                "reference": null,
                                "geoCoordinates": [

                                ]
                            },
                            "logisticsInfo": [

                            ],
                            "availableAddresses": [
                                {
                                    "addressType": null,
                                    "receiverName": null,
                                    "addressId": "0e33c6c6387c4a8da1c02d80a399eed2",
                                    "postalCode": "06416070",
                                    "city": "Barueri",
                                    "state": "SP",
                                    "country": "BRA",
                                    "street": "Rua Major Ãlvaro Fontes",
                                    "number": null,
                                    "neighborhood": "Vila Engenho Novo",
                                    "complement": null,
                                    "reference": null,
                                    "geoCoordinates": [

                                    ]
                                }
                            ]
                        },
                        "clientProfileData": {
                            "attachmentId": "clientProfileData",
                            "email": "rafael.cruz@corebiz.com.br",
                            "firstName": null,
                            "lastName": null,
                            "document": null,
                            "documentType": null,
                            "phone": null,
                            "corporateName": null,
                            "tradeName": null,
                            "corporateDocument": null,
                            "stateInscription": null,
                            "corporatePhone": null,
                            "isCorporate": false,
                            "profileCompleteOnLoading": false,
                            "profileErrorOnLoading": false
                        },
                        "paymentData": {
                            "installmentOptions": [
                                {
                                    "paymentSystem": "2",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 2,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 19798,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 2,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 19798,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 3,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 13198,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 3,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 13198,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 4,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 9899,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 4,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 9899,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 5,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 7919,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 5,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 7919,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 6,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 6599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 6,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 6599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 7,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 5656,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 7,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 5656,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 8,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4949,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 8,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4949,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 9,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4399,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 9,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4399,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 10,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3959,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 10,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3959,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 11,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 11,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 12,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3299,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 12,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3299,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "4",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 2,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 19798,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 2,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 19798,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 3,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 13198,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 3,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 13198,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 4,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 9899,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 4,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 9899,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 5,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 7919,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 5,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 7919,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 6,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 6599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 6,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 6599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 7,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 5656,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 7,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 5656,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 8,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4949,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 8,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4949,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 9,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4399,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 9,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4399,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 10,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3959,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 10,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3959,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 11,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 11,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 12,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3299,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 12,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3299,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "16",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "201",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "paymentSystems": [
                                {
                                    "id": 201,
                                    "name": "Nome da PromissÃ³ria",
                                    "groupName": "custom201PaymentGroupPaymentGroup",
                                    "validator": {
                                        "regex": null,
                                        "mask": null,
                                        "cardCodeRegex": null,
                                        "cardCodeMask": null,
                                        "weights": null,
                                        "useCvv": false,
                                        "useExpirationDate": false,
                                        "useCardHolderName": false,
                                        "useBillingAddress": false
                                    },
                                    "stringId": "201",
                                    "template": "custom201PaymentGroupPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": true,
                                    "description": "DescriÃ§Ã£o da PromissÃ³ria",
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-08T02:13:57.026031Z"
                                },
                                {
                                    "id": 16,
                                    "name": "Vale",
                                    "groupName": "giftCardPaymentGroup",
                                    "validator": {
                                        "regex": null,
                                        "mask": null,
                                        "cardCodeRegex": null,
                                        "cardCodeMask": null,
                                        "weights": null,
                                        "useCvv": false,
                                        "useExpirationDate": false,
                                        "useCardHolderName": false,
                                        "useBillingAddress": false
                                    },
                                    "stringId": "16",
                                    "template": "giftCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-02T02:13:57.0572039Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Visa",
                                    "groupName": "creditCardPaymentGroup",
                                    "validator": {
                                        "regex": "^4",
                                        "mask": "9999 9999 9999 9999",
                                        "cardCodeRegex": "^[0-9]{3}$",
                                        "cardCodeMask": "999",
                                        "weights": [
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2
                                        ],
                                        "useCvv": true,
                                        "useExpirationDate": true,
                                        "useCardHolderName": true,
                                        "useBillingAddress": true
                                    },
                                    "stringId": "2",
                                    "template": "creditCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-04T02:13:57.0728322Z"
                                },
                                {
                                    "id": 4,
                                    "name": "Mastercard",
                                    "groupName": "creditCardPaymentGroup",
                                    "validator": {
                                        "regex": "^((5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0}))|((508116)\\d{0,10})|((502121)\\d{0,10})|((589916)\\d{0,10})|(2[0-9]{15}))",
                                        "mask": "9999 9999 9999 9999",
                                        "cardCodeRegex": "^[0-9]{3}$",
                                        "cardCodeMask": "999",
                                        "weights": [
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2
                                        ],
                                        "useCvv": true,
                                        "useExpirationDate": true,
                                        "useCardHolderName": true,
                                        "useBillingAddress": true
                                    },
                                    "stringId": "4",
                                    "template": "creditCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-04T02:13:57.1040339Z"
                                }
                            ],
                            "payments": [

                            ],
                            "giftCards": [

                            ],
                            "giftCardMessages": [

                            ],
                            "availableAccounts": [

                            ],
                            "availableTokens": [

                            ]
                        },
                        "marketingData": null,
                        "sellers": [

                        ],
                        "clientPreferencesData": {
                            "attachmentId": "clientPreferencesData",
                            "locale": "pt-BR",
                            "optinNewsLetter": null
                        },
                        "storePreferencesData": {
                            "countryCode": "BRA",
                            "checkToSavePersonDataByDefault": true,
                            "templateOptions": { "toggleCorporate": false },
                            "timeZone": "E. South America Standard Time",
                            "currencyCode": "BRL",
                            "currencyLocale": 1046,
                            "currencySymbol": "R$",
                            "currencyFormatInfo": {
                                "currencyDecimalDigits": 2,
                                "currencyDecimalSeparator": ",",
                                "currencyGroupSeparator": ".",
                                "currencyGroupSize": 3,
                                "startsWithCurrencySymbol": true
                            }
                        },
                        "giftRegistryData": null,
                        "openTextField": {
                            "attachmentId": "openTextField",
                            "value": null
                        },
                        "customData": null,
                        "hooksData": null,
                        "ratesAndBenefitsData": null,
                        "itemsOrdination": null
                    });

                }

            }
        };

    };

    CorebizSDK.prototype.orderForm = function () {

        //var _this = this;

        return {
            'list': function (success_fn, error_fn, isDeveloper) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;

                if (!_isDeveloper) {

                    $.getJSON(_config.url_order_form, function (response) {

                        if (_callback) {

                            success_fn(response);

                        }

                    },
                        function (error) {

                            if (_callback) {

                                error_fn(error);

                            }

                        });

                } else {

                    success_fn({
                        "orderFormId": "35480778a7354d1b8162515599255c13",
                        "salesChannel": "1",
                        "loggedIn": true,
                        "isCheckedIn": false,
                        "storeId": null,
                        "allowManualPrice": false,
                        "canEditData": true,
                        "userProfileId": "555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
                        "userType": null,
                        "ignoreProfileData": false,
                        "value": 0,
                        "messages": [

                        ],
                        "items": [

                        ],
                        "selectableGifts": [

                        ],
                        "products": [

                        ],
                        "totalizers": [

                        ],
                        "shippingData": {
                            "attachmentId": "shippingData",
                            "address": {
                                "addressType": null,
                                "receiverName": null,
                                "addressId": "0e33c6c6387c4a8da1c02d80a399eed2",
                                "postalCode": "06416070",
                                "city": "Barueri",
                                "state": "SP",
                                "country": "BRA",
                                "street": "Rua Major Álvaro Fontes",
                                "number": null,
                                "neighborhood": "Vila Engenho Novo",
                                "complement": null,
                                "reference": null,
                                "geoCoordinates": [

                                ]
                            },
                            "logisticsInfo": [

                            ],
                            "availableAddresses": [
                                {
                                    "addressType": null,
                                    "receiverName": null,
                                    "addressId": "0e33c6c6387c4a8da1c02d80a399eed2",
                                    "postalCode": "06416070",
                                    "city": "Barueri",
                                    "state": "SP",
                                    "country": "BRA",
                                    "street": "Rua Major Álvaro Fontes",
                                    "number": null,
                                    "neighborhood": "Vila Engenho Novo",
                                    "complement": null,
                                    "reference": null,
                                    "geoCoordinates": [

                                    ]
                                }
                            ]
                        },
                        "clientProfileData": {
                            "attachmentId": "clientProfileData",
                            "email": "rafael.cruz@corebiz.com.br",
                            "firstName": null,
                            "lastName": null,
                            "document": null,
                            "documentType": null,
                            "phone": null,
                            "corporateName": null,
                            "tradeName": null,
                            "corporateDocument": null,
                            "stateInscription": null,
                            "corporatePhone": null,
                            "isCorporate": false,
                            "profileCompleteOnLoading": false,
                            "profileErrorOnLoading": false
                        },
                        "paymentData": {
                            "installmentOptions": [
                                {
                                    "paymentSystem": "2",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 2,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 19798,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 2,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 19798,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 3,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 13198,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 3,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 13198,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 4,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 9899,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 4,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 9899,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 5,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 7919,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 5,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 7919,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 6,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 6599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 6,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 6599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 7,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 5656,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 7,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 5656,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 8,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4949,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 8,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4949,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 9,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4399,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 9,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4399,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 10,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3959,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 10,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3959,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 11,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 11,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 12,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3299,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 12,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3299,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "4",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 2,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 19798,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 2,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 19798,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 3,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 13198,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 3,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 13198,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 4,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 9899,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 4,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 9899,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 5,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 7919,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 5,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 7919,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 6,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 6599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 6,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 6599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 7,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 5656,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 7,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 5656,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 8,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4949,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 8,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4949,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 9,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 4399,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 9,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 4399,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 10,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3959,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 10,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3959,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 11,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3599,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 11,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3599,
                                                    "total": 39596
                                                }
                                            ]
                                        },
                                        {
                                            "count": 12,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 3299,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 12,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 3299,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "16",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "paymentSystem": "201",
                                    "bin": null,
                                    "paymentName": null,
                                    "paymentGroupName": null,
                                    "value": 39596,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": false,
                                            "interestRate": 0,
                                            "value": 39596,
                                            "total": 39596,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "COREBIZ",
                                                    "count": 1,
                                                    "hasInterestRate": false,
                                                    "interestRate": 0,
                                                    "value": 39596,
                                                    "total": 39596
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "paymentSystems": [
                                {
                                    "id": 201,
                                    "name": "Nome da Promissória",
                                    "groupName": "custom201PaymentGroupPaymentGroup",
                                    "validator": {
                                        "regex": null,
                                        "mask": null,
                                        "cardCodeRegex": null,
                                        "cardCodeMask": null,
                                        "weights": null,
                                        "useCvv": false,
                                        "useExpirationDate": false,
                                        "useCardHolderName": false,
                                        "useBillingAddress": false
                                    },
                                    "stringId": "201",
                                    "template": "custom201PaymentGroupPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": true,
                                    "description": "Descrição da Promissória",
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-08T02:13:57.026031Z"
                                },
                                {
                                    "id": 16,
                                    "name": "Vale",
                                    "groupName": "giftCardPaymentGroup",
                                    "validator": {
                                        "regex": null,
                                        "mask": null,
                                        "cardCodeRegex": null,
                                        "cardCodeMask": null,
                                        "weights": null,
                                        "useCvv": false,
                                        "useExpirationDate": false,
                                        "useCardHolderName": false,
                                        "useBillingAddress": false
                                    },
                                    "stringId": "16",
                                    "template": "giftCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-02T02:13:57.0572039Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Visa",
                                    "groupName": "creditCardPaymentGroup",
                                    "validator": {
                                        "regex": "^4",
                                        "mask": "9999 9999 9999 9999",
                                        "cardCodeRegex": "^[0-9]{3}$",
                                        "cardCodeMask": "999",
                                        "weights": [
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2
                                        ],
                                        "useCvv": true,
                                        "useExpirationDate": true,
                                        "useCardHolderName": true,
                                        "useBillingAddress": true
                                    },
                                    "stringId": "2",
                                    "template": "creditCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-04T02:13:57.0728322Z"
                                },
                                {
                                    "id": 4,
                                    "name": "Mastercard",
                                    "groupName": "creditCardPaymentGroup",
                                    "validator": {
                                        "regex": "^((5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0}))|((508116)\\d{0,10})|((502121)\\d{0,10})|((589916)\\d{0,10})|(2[0-9]{15}))",
                                        "mask": "9999 9999 9999 9999",
                                        "cardCodeRegex": "^[0-9]{3}$",
                                        "cardCodeMask": "999",
                                        "weights": [
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2,
                                            1,
                                            2
                                        ],
                                        "useCvv": true,
                                        "useExpirationDate": true,
                                        "useCardHolderName": true,
                                        "useBillingAddress": true
                                    },
                                    "stringId": "4",
                                    "template": "creditCardPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2017-05-04T02:13:57.1040339Z"
                                }
                            ],
                            "payments": [

                            ],
                            "giftCards": [

                            ],
                            "giftCardMessages": [

                            ],
                            "availableAccounts": [

                            ],
                            "availableTokens": [

                            ]
                        },
                        "marketingData": null,
                        "sellers": [

                        ],
                        "clientPreferencesData": {
                            "attachmentId": "clientPreferencesData",
                            "locale": "pt-BR",
                            "optinNewsLetter": null
                        },
                        "storePreferencesData": {
                            "countryCode": "BRA",
                            "checkToSavePersonDataByDefault": true,
                            "templateOptions": { "toggleCorporate": false },
                            "timeZone": "E. South America Standard Time",
                            "currencyCode": "BRL",
                            "currencyLocale": 1046,
                            "currencySymbol": "R$",
                            "currencyFormatInfo": {
                                "currencyDecimalDigits": 2,
                                "currencyDecimalSeparator": ",",
                                "currencyGroupSeparator": ".",
                                "currencyGroupSize": 3,
                                "startsWithCurrencySymbol": true
                            }
                        },
                        "giftRegistryData": null,
                        "openTextField": {
                            "attachmentId": "openTextField",
                            "value": null
                        },
                        "customData": null,
                        "hooksData": null,
                        "ratesAndBenefitsData": null,
                        "itemsOrdination": null
                    });

                }

            },
            'clear': function () {

                this.list(function (response) {

                    if (response.orderFormId) {

                        window.location.href = _config.url_orderform_clear + response.orderFormId;

                    }

                }, function (error) {

                    error_fn(error);

                });

            }
        };

    };

    CorebizSDK.prototype.checkout = function () {

        var _this = this;

        return {
            'saveAttachments': function (data, attachmentName, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!data || !order_form_id || !attachmentName) {

                    return;

                }

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/attachments/" + attachmentName, "POST", data, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'handleAddAttachmentsOpenTextField': function (value, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!value) {

                    return;

                }

                var request_data = {
                    'value': value,
                    'expectedOrderFormSections': allOrderFormSections,
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + _config.url_attachments_openTextField, "POST", request_data, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'addAttachmentsOpenTextField': function (value, success_fn, error_fn) {

                // [{id: "2010", quantity: 1, seller: 1}]

                if (!value) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    this.handleAddAttachmentsOpenTextField(value, response.orderFormId, function (response) {

                        if (_callback) {

                            success_fn(response);

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

                }.bind(this), function (error) {

                    error_fn(error);

                });

            },
            'handleAddItemAttachment': function (data, AttachmentName, index_cart_item, order_form_id, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!data) {

                    return;

                }

                var request_data = {
                    'content': data,
                    'expectedOrderFormSections': allOrderFormSections,
                    'noSplitItem': false
                };

                _this.ajax(_config.url_order_form + "/" + order_form_id + "/items/" + index_cart_item + "/attachments/" + AttachmentName, "POST", request_data, function (response) {

                    if (_callback) {

                        success_fn(response);

                    }

                }, function (error) {

                    if (_callback) {

                        error_fn(error);

                    }

                }, true);

                return null;

            },
            'addItemAttachment': function (data, attachmentName, index_cart_item, success_fn, error_fn) {

                if (!data || !attachmentName || index_cart_item === "") {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    this.handleAddItemAttachment(data, attachmentName, index_cart_item, response.orderFormId, function (response) {

                        if (_callback) {

                            success_fn(response);

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

                }.bind(this), function (error) {

                    error_fn(error);

                });

            },
            'saveClientProfileData': function (data, success_fn, error_fn) {
                
                if (!data) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    if (typeof data.homePhone !== 'undefined') {

                        data.homePhone = "+55" + data.homePhone;

                    }


                    if (typeof data.phone !== 'undefined') {

                        data.phone = "+55" + data.phone;

                    }

                    // response.corporateDocument = null;
                    // response.corporateName = null;
                    // response.stateInscription = null;
                    // response.isCorporate = false;
                    // response.tradeName = null;

                    this.saveAttachments(data, "clientProfileData", response.orderFormId, function (response) {

                        if (_callback) {

                            success_fn(response);

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

                }.bind(this), function (error) {

                    error_fn(error);

                });

            },
            'getAddressInformation': function (data, success_fn, error_fn, isDeveloper) {

                if (!data || !data.country || !data.postalCode) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");
                var _isDeveloper = isDeveloper || false;
                
                if(_isDeveloper) {

                    success_fn({"postalCode":"22250040","city":"Rio de Janeiro Fake","state":"RJ","country":"BRA","street":"Praia de Botafogo","number":"","neighborhood":"Botafogo","complement":"","reference":"","geoCoordinates":[]});
                    return;

                }

                $.ajax({
                    'url': _config.url_api_address_information + data.country + "/" + data.postalCode,
                    'type': "GET",
                    'headers': _config.header,
                    'success': function (res) {
                        
                        if(_callback)
                            success_fn(res);

                    },
                    'error': function (e) {
                        
                        if(_callback)
                            error_fn(false, e);

                    }

                });    

            },
            'saveShippingData': function (data, success_fn, error_fn) {

                if (!data || !data.postalCode) {

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    data.addressName = data.addressName || _data.getTime();
                    data.addressId = data.addressId || data.addressName;

                    var data_request = {
                        "clearAddressIfPostalCodeNotFound": true,
                        "address": data,
                        "expectedOrderFormSections": allOrderFormSections
                    };

                    var self = this;

                    self.saveAttachments(data_request, "shippingData", response.orderFormId, function (response) {

                        if (_callback) {

                            _this.orderForm().list(function (response_confirm) {

                                if (!response_confirm.shippingData.address.street) {

                                    data_request = {
                                        "logisticsInfo": response_confirm.shippingData.logisticsInfo,
                                        "address": data,
                                        "expectedOrderFormSections": allOrderFormSections
                                    };

                                    self.saveAttachments(data_request, "shippingData", response.orderFormId, function (response) {

                                        if (_callback) {

                                            success_fn(response);

                                        }

                                    }, function (error) {

                                        if (_callback) {

                                            error_fn(error);

                                        }

                                    });

                                } else {

                                    if (_callback) {

                                        success_fn(response);

                                    }

                                }

                            }, function (error) {

                                if (_callback) {

                                    error_fn(error);

                                }

                            });

                        }

                    }, function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    });

                }.bind(this), function (error) {

                    error_fn(error);

                });

            },
            'getDeliveryShipping': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                _this.orderForm().list(function (response) {

                    if (_callback) {

                        success_fn(response.shippingData.logisticsInfo[0]);

                    }


                }.bind(this), function (error) {

                    error_fn(error);

                });

            },
            'chooseDeliveryShipping': function (index, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (index === "") {

                    return;

                }

                _this.orderForm().list(function (response) {

                    if (response.shippingData.logisticsInfo[0]) {

                        // Escolha da transportadora no orderfom
                        var selectedSla = response.shippingData.logisticsInfo[0].slas[index];

                        if (selectedSla) {

                            var attachment = {
                                'address': Object.assign({}, response.shippingData.address),
                                'logisticsInfo': response.items.map(function (item, pos) {

                                    return {
                                        'itemIndex': pos,
                                        'selectedSla': selectedSla.id
                                    };

                                })
                            };

                            var data_request = {
                                "attachmentId": "shippingData",
                                "address": attachment.address,
                                "logisticsInfo": attachment.logisticsInfo
                            };

                            this.saveAttachments(data_request, "shippingData", response.orderFormId, function (response) {

                                if (_callback) {

                                    success_fn(response);

                                }

                            }, function (error) {

                                if (_callback) {

                                    error_fn(error);

                                }

                            });

                        } else {

                            if (_callback) {

                                success_fn(false);

                            }

                        }

                    }

                    if (_callback) {

                        success_fn(response.shippingData.logisticsInfo[0]);

                    }

                }.bind(this), function (error) {

                    error_fn(error);

                });

            }
        };

    };

    CorebizSDK.prototype.masterData = function () {

        var _this = this;

        return {
            'request': function (data, pathname, method, qty, fn) {

                if (qty) {

                    _config.header['REST-range'] = "resources=" + qty; // 0-100

                }

                var url = _config.apiMasterData + pathname;

                // if(url.indexOf("?") > -1){
                    
                //     url += "&v=" + _data.getTime();

                // }else{

                //     url += "?v=" + _data.getTime();

                // }

                $.ajax({
                    'url': url,
                    'data': (Object.keys(data).length) ? JSON.stringify(data) : "",
                    'type': method,
                    'headers': _config.header,
                    'success': function (res) {

                        fn(res);
                        _this.log("OK " + method + " -- " + url);
                        _this.log(res);

                    },
                    'error': function (e) {

                        fn(false, e);
                        _this.error("Error " + method + " -- " + url);
                        _this.error(e);

                    }

                });

            },
            'insert': function (data, pathname, success_fn, error_fn) {

                if (!data || !Object.keys(data).length) {

                    console.info("O objeto de dados esta vazio");

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                this.request(data, pathname, "POST", "0-1", function (resp, error) {

                    if (_callback) {

                        if (resp) {

                            success_fn(resp || true);

                        } else {

                            error_fn(error);

                        }

                    }

                });

                return null;

            },
            'select': function (config, pathname, qty, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                this.request({}, pathname + _this.parameters(config), "GET", qty, function (resp, error) {

                    if (_callback) {

                        if (resp) {

                            success_fn(resp || true);

                        } else {

                            error_fn(error);

                        }

                    }

                });

                return null;

            },
            'update': function (data, pathname, success_fn, error_fn, type) {

                if (!data || !Object.keys(data).length) {

                    console.info("O objeto de dados esta vazio");

                    return;

                }

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                type = type || "PATCH";

                this.request(data, pathname, type, "0-1", function (resp, error) {

                    if (_callback) {

                        if (resp) {

                            success_fn(resp || true);

                        } else {

                            error_fn(error);

                        }

                    }

                });

                return null;

            },
            'delete': function (pathname, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                this.request({}, pathname, "DELETE", "0-1", function (resp, error) {

                    if (_callback) {

                        if (resp) {

                            success_fn(resp || true);

                        } else {

                            error_fn(error);

                        }

                    }

                });

                return null;

            }
        };

    };

    CorebizSDK.prototype.newslatter = function () {

        // var _this = this;

        return {
            'send': function (config, success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                if (!config) {

                    return;

                }

                var data = {};

                data.newsletterClientName = helper.upperAllFirstLetter(config.name);
                data.newsletterClientEmail = config.email;
                data.newsInternalPage = '_newsletter-vtex';
                data.newsInternalPart = 'newsletter';
                data.newsInternalCampaign = 'newsletter:opt-in';

                $.ajax({
                    'url': _config.url_api_newsletter,
                    'type': 'POST',
                    'data': data,
                    'success': function (data) {

                        if (data === "true") {

                            if (_callback) {

                                success_fn(true);

                            }

                        } else {

                            success_fn(false);

                        }

                    },
                    'error': function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }
                });

            }
        };

    };

    CorebizSDK.prototype.vtex = function () {

        // var _this = this;

        return {
            'dataserver': function (success_fn, error_fn) {

                var _callback = (typeof success_fn == "function" && typeof error_fn == "function");

                $.ajax({
                    'url': _config.url_api_dataserver,
                    'type': 'GET',
                    'success': function (data) {

                        if (_callback) {

                            console.log(data);

                            success_fn(helper.formatData(data));

                        }

                    },
                    'error': function (error) {

                        if (_callback) {

                            error_fn(error);

                        }

                    }
                });

            }
        };

    };

    CorebizSDK.prototype.storage = function () {

        return {
            'create': function (name, value) {

                if (!name) {

                    return;

                }

                if (typeof value == "object") {

                    value = JSON.stringify(value);

                }

                // Cria um item "usuario" com valor "Thiago Belem"
                window.localStorage.setItem(name, value);

            },
            'select': function (name) {

                if (!name) {

                    return;

                }

                // Depois, em outra página ou aba, recupera esse item
                var value = window.localStorage.getItem(name);

                if (value.indexOf("{") > -1 || value.indexOf("[]") > -1) {

                    value = JSON.parse(value);

                }

                return value;

            },
            'remove': function (name, index_for_delete) {

                if (!name) {

                    return;

                }

                if (index_for_delete >= 0) {

                    var value = this.select(name);

                    if (typeof value != "object") {

                        return;

                    }

                    // Remove o item
                    value.splice(index_for_delete, 1);

                    if (value) {

                        this.create(name, value);

                    }

                    return value;

                } else {

                    this.create(name, "");
                    localStorage.removeItem(name);

                }

                return false;

            }
        };

    };

    CorebizSDK.prototype.upload = function () {
        
        // http://store.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=CL-{{resumeuser.id}}&amp;fileName={{resumeuser.thumbimage}}"
        // http://hiperideal.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=TC-9b9794e6-2914-11e8-81cd-0a6239b1dc86&fileName=hiperideal-logo.png
        // var file = document.getElementById('fileToUpload').files[0];

        return {
            'send': function (file, table, id, max_size, types, field_name_file, xhr_fn, fn, err) {

                if (!file || !table || !id || !max_size || !field_name_file) {

                    return;

                }

                var _xhr_cb = (typeof xhr_fn == "function");
                var _fn_cb = (typeof fn == "function");
                var _err_cb = (typeof err == "function");

                var namefile = file.name;
                var sizefile = file.size;
                var fileData = new FormData();

                fileData.append('file', file);

                if (sizefile <= max_size) {

                    if (namefile) {
                        
                        var namefile_split = namefile.split(".");
                        var type_file = namefile_split[namefile_split.length - 1];

                        if(types.indexOf(type_file) > -1){

                            $.ajax({
                                'url': _config.apiMasterData + table + "/documents/" + id + "/"+ field_name_file +"/attachments", // URL
                                'type': 'POST',
                                'data': fileData,
                                'processData': false,
                                'contentType': false,
                                'enctype': 'multipart/form-data',
                                'beforeSend': function (request) {

                                    request.setRequestHeader("Accept", "application/vnd.vtex.ds.v10+json");

                                    if (_config.headers['x-vtex-api-appKey']) {

                                        request.setRequestHeader("X-VTEX-API-AppKey", _config.headers['x-vtex-api-appKey']);

                                    }

                                    if (_config.headers['x-vtex-api-appToken']) {

                                        request.setRequestHeader("X-VTEX-API-AppToken", _config.headers['x-vtex-api-appToken']);

                                    }

                                },
                                'xhr': function () {

                                    var xhr = new window.XMLHttpRequest();

                                    xhr.upload.addEventListener("progress", function (evt) {

                                        if (evt.lengthComputable) {

                                            var percentComplete = evt.loaded / evt.total;

                                            percentComplete = parseInt(percentComplete * 100);

                                            if (_xhr_cb) {

                                                xhr_fn(percentComplete);

                                            }

                                        }

                                    }, false);

                                    return xhr;

                                },

                            }).success(function (resp) {

                                if (_fn_cb) {

                                    fn(resp);

                                }

                            }).error(function (error) {

                                if (_err_cb) {

                                    err(false, error);

                                }

                            });

                        } else {

                            err(false, 'Tipo do arquivo inválido');

                            return {
                                'status': false,
                                'error': 'Tipo do arquivo inválido'
                            };

                        }

                    } else {

                        err(false, 'Arquivo não encontrado');

                        return {
                            'status': false,
                            'error': 'Arquivo não encontrado'
                        };

                    }

                } else {

                    err(false, 'Arquivo maior do que o permitido');

                    return {
                        'status': false,
                        'error': 'Arquivo maior do que o permitido'
                    };

                }

            }
        };

    };

    var corebizSDK = new CorebizSDK();
    var corebiz = {};
    var return_fn;

    for (var item in corebizSDK) {

        if (typeof corebizSDK[item] === "function") {

            if (item != "config") {

                return_fn = corebizSDK[item]();

                if (return_fn) {

                    corebiz[item] = return_fn;

                } else {

                    corebiz[item] = corebizSDK[item];

                }

            } else {

                corebiz[item] = corebizSDK[item];

            }

        }

    }

    window.corebiz = corebiz;

})($);

// export default corebiz;

// corebiz.config({
//     'DEBUG': true, // Mostras os debugs do sdk
//     'namestore': 'corebiz', // Nome da loja (Obrigatorio)
//     'headers': { // Headers para o Master Data
//         'Accept': 'application/json; charset=utf-8',
//         'Content-Type': 'application/json',
//     }
// });





