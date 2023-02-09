    jQuery(function() {
        jQuery("#business_btn1").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-1").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-1").removeClass("visible_btn")
        })
    }), jQuery(function() {
        jQuery("#business_btn2").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-2").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-2").removeClass("visible_btn")
        })
    }), jQuery(function() {
        jQuery("#business_btn3").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-3").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-3").removeClass("visible_btn")
        })
    }), jQuery(function() {
        jQuery("#business_btn4").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-4").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-4").removeClass("visible_btn")
        }), jQuery("#business_btn5").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-5").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-5").removeClass("visible_btn")
        }), jQuery("#business_btn6").mouseover(function() {
            jQuery(".ShowImage").addClass("hidden_btn"), jQuery("#show-6").addClass("visible_btn")
        }).mouseleave(function() {
            jQuery(".ShowImage").removeClass("hidden_btn"), jQuery("#show-6").removeClass("visible_btn")
        })
    }), jQuery(function() {
        jQuery("#navbtn").click(function() {
            var e = jQuery(this).attr("data-nvaBar");
            jQuery("#" + e).css({
                transform: "translateX(0)"
            }, 300), jQuery(".fixedOnbody").slideDown(200)
        })
    }), jQuery(function() {
        jQuery("#close, .fixedOnbody").click(function() {
            jQuery("#naviGation").css({
                transform: "translateX(-300px)"
            }, 300), jQuery(".fixedOnbody").slideUp(200)
        })
    }), jQuery(function() {
        jQuery(".arrowToggle").click(function() {
            jQuery(this).toggleClass("rotate"), jQuery("#slide-dropdown").toggleClass("active")
        })
    }), jQuery(function() {
        jQuery("#GetStarted, #GetStarted1").click(function() {
            jQuery("#poup_div, #poup_div1").fadeIn(300), jQuery("#poup_div, #poup_div1").is(":visible") ? jQuery("html::-webkit-scrollbar").hide() : jQuery("html::-webkit-scrollbar").show()
        })
    }), jQuery(function() {
        jQuery("#back1, #back1_1, #close1, #close1_1, #close2, #close2_1").click(function() {
            jQuery("#poup_div, #poup_div1").fadeOut(300), jQuery(".comp_mac, .products").removeClass("Select_Product"), jQuery(".get_start").attr("disabled", "disabled").removeClass("Select_Product"), jQuery(".choose_me button").attr("disabled", "disabled").removeClass("ActiveButton"), jQuery(".choose_me ul li").removeClass("SelectProduct")
        })
    }), jQuery(function() {
        jQuery("#NextButton, #NextButton1").click(function() {
            jQuery("#popUp1, #popUp1_1").fadeOut(300), jQuery("#popUp2, #popUp2_1").fadeIn(300)
        })
    }), jQuery(function() {
        jQuery("#Back2").click(function() {
            jQuery("#popUp2, #popUp2_1").fadeOut(300), jQuery("#popUp1, #popUp1_1").fadeIn(300)
        })
    }), jQuery(function() {
        jQuery("#selectAll").click(function() {
            jQuery(this).toggleClass("Select_Product"), jQuery(this).hasClass("Select_Product") ? jQuery(".products").removeClass("Select_Product") : jQuery(".products").addClass("Select_Product")
        })
    });
    var x = 40,
    y = 40;
    jQuery(document).ready(function() {
        jQuery(".drop_d").click(function() {
            jQuery(".product_thum").animate({
                scrollTop: x += 60
            }, 300), jQuery(this).scrollTop() >= x ? jQuery(".drop_u").css({
                visibility: "hidden"
            }, 300) : jQuery(".drop_u").css({
                visibility: "visible"
            }, 300)
        })
    }), jQuery(document).ready(function() {
        jQuery(".drop_u").click(function() {
            jQuery(".product_thum").animate({
                scrollTop: y -= 60
            }, 300)
        })
    }), jQuery(function() {
        jQuery("#right_section, #right_section .detail-1").mouseover(function() {
            jQuery("#left_section, #middle-section").addClass("move_right")
        }).mouseleave(function() {
            jQuery("#left_section, #middle-section").removeClass("move_right")
        })
    }), jQuery(function() {
        jQuery("button.close").click(function() {
            jQuery("#myModal, .modal-backdrop.in").slideUp(300), jQuery("body").removeAttr("style").removeClass("modal-open")
        })
    }), jQuery(window).scroll(function() {
        jQuery(this).scrollTop() >= 1 ? jQuery("body").addClass("stick") : jQuery("body").removeClass("stick")
    }), jQuery(function() {
        jQuery("#homeProducts .tab_content.active .ShowProducts").slice(6).hide(), jQuery(".masonry ul li a").click(function() {
            var e = jQuery(this).attr("data-product-pannel");
            jQuery(this).parent().addClass("active").siblings().removeClass("active"), jQuery(".show_more button").removeClass("hideProduct").html("+ View More"), jQuery(this).parent().hasClass("active") ? (jQuery("#" + e).addClass("active").siblings().removeClass("active"), jQuery("#homeProducts .tab_content.active .ShowProducts").slice(6).hide(), jQuery("#homeProducts .tab_content.active .ShowProducts").length < 7 ? jQuery(".show_more button").hide() : jQuery(".show_more button").show()) : jQuery("#" + e).removeClass("active")
        })
    }), jQuery(function() {
        jQuery(".TknocksService li:first-child a").click(function() {
            jQuery(".tab_container.product_div .tab_content").addClass("active")
        })
    }), jQuery(function() {
        jQuery(".show_more button").click(function() {
            jQuery(this).toggleClass("hideProduct"), jQuery("#homeProducts .tab_content.active .ShowProducts").slice(6).slideToggle(400), jQuery(this).hasClass("hideProduct") ? jQuery(".show_more button").html("- View Less") : jQuery(".show_more button").html("+ View More")
        })
    }), jQuery(function() {
        jQuery(".masonry ul li a").click(function() {
            var e = jQuery(this).attr("data-banner");
            jQuery("#" + e).addClass("active").siblings().removeClass("active")
        })
    }), jQuery(function() {
        jQuery(".masonry ul li:first-child a").click(function() {
            jQuery("#homeProducts .tab_content.active .ShowProducts").slice(6).addClass("active")
        })
    }), jQuery(function() {
        jQuery(".show_product").click(function() {
            var e = jQuery(this).attr("data-product-show");
            jQuery(e).show().siblings().hide(), jQuery(this).parent().addClass("active").siblings().removeClass("active")
        })
    }), jQuery(function() {
        jQuery("#CheckProduct").click(function() {
            jQuery("#ProductMenu").slideToggle(400)
        })
    }), jQuery(function() {
        jQuery(".choose_me ul li").click(function() {
            jQuery(this).toggleClass("SelectProduct"), jQuery(".choose_me ul li").hasClass("SelectProduct") ? jQuery(".choose_me button").removeAttr("disabled").addClass("ActiveButton") : jQuery(".choose_me button").attr("disabled", "disabled").removeClass("ActiveButton")
        })
    }), jQuery(function() {
        jQuery("#product-tab1").click(function() {
            jQuery(".ShowAll .tab-pane").addClass("active")
        })
    }), jQuery(function() {
        jQuery("#grid-icon").click(function() {
            jQuery("#blog-container .clearfix").addClass("col-sm-6"), jQuery(this).addClass("active"), jQuery("#list-icon").removeClass("active")
        })
    }), jQuery(function() {
        jQuery("#list-icon").click(function() {
            jQuery("#blog-container .clearfix").removeClass("col-sm-6"), jQuery(this).addClass("active"), jQuery("#grid-icon").removeClass("active")
        })
    }), jQuery(function() {
        jQuery(".inner-div-t-p .border-pro-ser .detail-list ul.listing-para li").prepend('<i class="fas fa-check"></i>')
    }), jQuery(function() {
        jQuery("section.support-4th-sec .nav-tabs>li a").click(function() {
            jQuery(this).parent().removeClass("blinkTknocks").siblings().addClass("blinkTknocks")
        })
    }), jQuery(function() {
        jQuery("button, a").click(function() {
            var e = jQuery(this).attr("data-quate");
            jQuery("#" + e).addClass("active")
        })
    }), jQuery(function() {
        jQuery("#GetQuate .close").click(function() {
            jQuery("#GetQuate").removeClass("active")
        })
    }), jQuery(function() {
        jQuery("#renew-box a").click(function() {
            var e = jQuery(this).attr("data-Service");
            jQuery("#" + e).show().siblings().hide(), jQuery(this).parent().addClass("active").siblings().removeClass("active")
        })
    }), jQuery(function() {
        jQuery("#HB_arrow button").click(function() {
            var e = jQuery(this).attr("data-HB");
            jQuery("#" + e).addClass("active").siblings().removeClass("active")
        })
    }), jQuery(function() {
        jQuery("a.infra").click(function() {
            var e = jQuery(this).attr("data-read");
            jQuery(this).toggleClass("readLess"), jQuery(this).hasClass("readLess") ? (jQuery(this).html("Read Less"), jQuery("#" + e).slideDown(200)) : (jQuery(this).html("Read More"), jQuery("#" + e).slideUp(200))
        })
    }), jQuery(function() {
        jQuery(".outerBox").click(function() {
            var e = jQuery(this).attr("data-More");
            jQuery("#" + e).toggleClass("active").siblings().removeClass("active"), jQuery(this).toggleClass("active").siblings().removeClass("active")
        })
    }), jQuery(function() {
        jQuery(".vertical_tab ul li a").click(function() {
            jQuery(this).parent().addClass("active").siblings().removeClass("active");
            var e = jQuery(this).attr("data-pannel");
            jQuery("#" + e).addClass("active").siblings().removeClass("active"), jQuery("a.infra").html("Read More").removeClass("readLess"), jQuery(".moreLearn").slideUp(200)
        })
    }), jQuery(function() {
        jQuery("#review .col-xs-7.pull-right.start").prepend("<h1>Help Me Choose</h1>")
    }), jQuery(function() {
        jQuery("button").click(function() {
            var e = jQuery(this).attr("data-all");
            jQuery("#" + e).slideToggle(300)
        })
    });
    var jQuerymenu = jQuery("#TKSupportBox");
    jQuery(function() {
        jQuery("#TkSixPro a.tkproimg, #TkSixPro a.tkproimg img").click(function() {
            var e = jQuery(this).attr("data-tkPro");
            jQuery(".TknocksSupport").addClass("TknocksSupport_padding"), jQuery(this).addClass("active").removeClass("animate").siblings().removeClass("active").addClass("animate"), jQuery("#TkSixPro").addClass("active"), jQuery(".heading").addClass("TkproductHead"), jQuery("#" + e).show().siblings().hide(), jQuery(".FullSizeImg img").prop("src", this.src), jQuery(".getFull").slideDown(0), jQuery(".Thumbnails").removeClass("Thumbnails").addClass("forScroll")
        })
    }), jQuery(document).click(function(e) {
        jQuerymenu.is(e.target) || 0 !== jQuerymenu.has(e.target).length || (jQuery("#TkSixPro").removeClass("active"), jQuery(".getFull").slideUp(0), jQuery(".TknocksSupport").removeClass("TknocksSupport_padding"), jQuery(".heading").removeClass("TkproductHead"), jQuery(".forScroll").addClass("Thumbnails").removeClass("forScroll"), jQuery("#TkSixPro a.tkproimg").removeClass("active"), jQuery(".TkProducts").hide())
    }), jQuery(function() {
        var e = jQuery(".comp1").height(),
        s = jQuery(".comp2").height(),
        t = jQuery(".comp3").height();
        switch (!0) {
            case e > s && e > t:
            jQuery(".keyFeatures").height(e);
            break;
            case s > e && s > t:
            jQuery(".keyFeatures").height(s);
            break;
            case t > e && t > s:
            jQuery(".keyFeatures").height(t);
        }

    }),jQuery(function() {
        jQuery(".interSecure").click(function() {
            jQuery(this).hide().removeClass("reverse");
            var e = jQuery(this).attr("data-compare");
            jQuery("#" + e).addClass("precomp").siblings().removeClass("precomp"), jQuery(".antiVirus, .totalSecure").show()
        })
    }), jQuery(function() {
        jQuery(".totalSecure").click(function() {
            jQuery(this).hide();
            var e = jQuery(this).attr("data-compare");
            jQuery("#" + e).addClass("precomp").siblings().removeClass("precomp"), jQuery(".antiVirus").hide(), jQuery(".interSecure").show().addClass("reverse")
        })
    }), jQuery(function() {
        jQuery(".antiVirus").click(function() {
            jQuery(this).hide();
            var e = jQuery(this).attr("data-compare");
            jQuery("#" + e).addClass("precomp").siblings().removeClass("precomp"), jQuery(".totalSecure").hide(), jQuery(".interSecure").show()
        })
    });
    var jQueryout = jQuery("#TkService");
    jQuery(function() {
        jQuery(".tknocksServices").click(function() {
            jQueryout.slideToggle(300)
        })
    });
    var count_particles, stats, update, jQueryaccord = jQuery(".accordion__heading");
    jQuery(function() {
        function e() {
            jQueryaccord.removeClass("active"), jQuery(".accordion__details").stop().slideUp(300).removeClass("active")
        }
        jQuery(".accordion__heading").click(function(s) {
            var t = $(this).attr("href");
            jQuery(s.target).is(".active") ? e() : (e(), jQuery(this).addClass("active"), jQuery(t).stop().slideDown(300).addClass("active"), jQuery("#defalut").hide()), s.preventDefault()
        })
    }), jQuery(function() {
        jQuery(window).width() < 767 ? jQuery(".accordion__details").removeClass(".accordion__details") : jQuery(".accordion__details").addClass(".accordion__details")
    }), jQuery(document).click(function(e) {
        jQueryaccord.is(e.target) || 0 !== jQueryaccord.has(e.target).length || (jQuery(".accordion__details").slideUp(300).removeClass("active"), jQuery("#defalut").slideDown(200), jQuery(".accordion__heading").removeClass("active"))
    }), jQuery(function() {
        jQuery(".BuyNow a.price_btn").mouseover(function() {
            jQuery(".ourPolicy").fadeIn(200)
        }).mouseleave(function() {
            jQuery(".ourPolicy").fadeOut(200)
        })
    }), jQuery(function() {
        jQuery("a.contact-hl").click(function() {
            var e = jQuery(this).attr("data-Map");
            jQuery("a.contact-hl i").toggleClass("fa-angle-down"), jQuery(e).slideToggle(200)
        })
    }),
    
    jQuery(document).ready(function(){
        var a = jQuery('html').width();
        var x = jQuery('.slide1').width();
        var y = jQuery('.slide2').width();
        var z = x+y;
        jQuery(function(){
            jQuery('.slider_div').width(z);
            jQuery('.slide1, .slide2').width(a);
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    $(document).ready(function() {
        ! function() {
            var e, s, t = 3500,
            i = 3800,
            r = i - 3e3,
            a = 50,
            o = 150,
            n = 500,
            u = n + 800,
            c = 600,
            l = 2500;

            function d(e) {
                var s = Q(e);
                if (e.parents(".cd-headline").hasClass("type")) {
                    var l = e.parent(".cd-words-wrapper");
                    l.addClass("selected").removeClass("waiting"), setTimeout(function() {
                        l.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                    }, n), setTimeout(function() {
                        y(s, o)
                    }, u)
                } else if (e.parents(".cd-headline").hasClass("letters")) {
                    var v = e.children("i").length >= s.children("i").length;
                    ! function e(s, i, r, a) {
                        s.removeClass("in").addClass("out");
                        s.is(":last-child") ? r && setTimeout(function() {
                            d(Q(i))
                        }, t) : setTimeout(function() {
                            e(s.next(), i, r, a)
                        }, a);
                        if (s.is(":last-child") && $("html").hasClass("no-csstransitions")) {
                            var o = Q(i);
                            h(i, o)
                        }
                    }(e.find("i").eq(0), e, v, a), j(s.find("i").eq(0), s, v, a)
                } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({
                    width: "2px"
                }, c, function() {
                    h(e, s), y(s)
                }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), h(e, s), setTimeout(function() {
                    d(s)
                }, i), setTimeout(function() {
                    e.parents(".cd-words-wrapper").addClass("is-loading")
                }, r)) : (h(e, s), setTimeout(function() {
                    d(s)
                }, t))
            }

            function y(e, s) {
                e.parents(".cd-headline").hasClass("type") ? (j(e.find("i").eq(0), e, !1, s), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                    width: e.width() + 10
                }, c, function() {
                    setTimeout(function() {
                        d(e)
                    }, l)
                })
            }

            function j(e, s, i, r) {
                e.addClass("in").removeClass("out"), e.is(":last-child") ? (s.parents(".cd-headline").hasClass("type") && setTimeout(function() {
                    s.parents(".cd-words-wrapper").addClass("waiting")
                }, 200), i || setTimeout(function() {
                    d(s)
                }, t)) : setTimeout(function() {
                    j(e.next(), s, i, r)
                }, r)
            }

            function Q(e) {
                return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
            }

            function h(e, s) {
                e.removeClass("is-visible").addClass("is-hidden"), s.removeClass("is-hidden").addClass("is-visible")
            }
            $(".cd-headline.letters").find("b").each(function() {
                var e = $(this),
                s = e.text().split(""),
                t = e.hasClass("is-visible");
                for (var i in s) e.parents(".rotate-2").length > 0 && (s[i] = "<em>" + s[i] + "</em>"), s[i] = t ? '<i class="in">' + s[i] + "</i>" : "<i>" + s[i] + "</i>";
                    var r = s.join("");
                e.html(r).css("opacity", 1)
            }), e = $(".cd-headline"), s = t, e.each(function() {
                var e = $(this);
                if (e.hasClass("loading-bar")) s = i, setTimeout(function() {
                    e.find(".cd-words-wrapper").addClass("is-loading")
                }, r);
                    else if (e.hasClass("clip")) {
                        var t = e.find(".cd-words-wrapper"),
                        a = t.width() + 10;
                        t.css("width", a)
                    } else if (!e.hasClass("type")) {
                        var o = e.find(".cd-words-wrapper b"),
                        n = 0;
                        o.each(function() {
                            var e = $(this).width();
                            e > n && (n = e)
                        }), e.find(".cd-words-wrapper").css("width", n)
                    }
                    setTimeout(function() {
                        d(e.find(".is-visible").eq(0))
                    }, s)
                }), $(".cd-words-wrapper").css("width", "200px")
        }()
    }), particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !1
    }), (stats = new Stats).setMode(0), stats.domElement.style.position = "absolute", stats.domElement.style.left = "0px", stats.domElement.style.top = "0px", document.body.appendChild(stats.domElement), count_particles = document.querySelector(".js-count-particles"), update = function() {
        stats.begin(), stats.end(), window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array && (count_particles.innerText = window.pJSDom[0].pJS.particles.array.length), requestAnimationFrame(update)
    }, requestAnimationFrame(update);