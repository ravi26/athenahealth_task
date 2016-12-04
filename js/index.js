/**
 * Created by Ravinder Singh Negi on 12/3/2016.
 */
$(function () {
    var Data = {
        crouselData: [
            {
                "main_title": "Opportunities for students and recent grads",
                "title_content": "Are you a student or recent college grad? Athenahealth is a great place to grow professionally and make a real difference in the world.",
                "link_title": "View job openings",
                "link": "#",
                "image": "images/image002.png"
            },
            {
                "main_title": "Opportunities for students and recent grads",
                "title_content": "Are you a student or recent college grad? Athenahealth is a great place to grow professionally and make a real difference in the world.",
                "link_title": "View job openings",
                "link": "#",
                "image": "images/image002.png"
            },
            {
                "main_title": "Opportunities for students and recent grads",
                "title_content": "Are you a student or recent college grad? Athenahealth is a great place to grow professionally and make a real difference in the world.",
                "link_title": "View job openings",
                "link": "#",
                "image": "images/image002.png"
            }
        ],
        athenistas: [
            {
                "field": "Data Science",
                "name": "Greg Joondeph-Breidbart",
                "profile": "Data Engineer Manager",
                "place": "Watertown, MA",
                "link": "/",
                "imageUrl": "images/greg-joondeph_breidbart_wat.png"
            },
            {
                "field": "Product Innovation",
                "name": "Anita Gupta",
                "profile": "Product Innovation Manager",
                "place": "San Francisco, CA",
                "link": "/",
                "imageUrl": "images/anita_gupta_sf.jpg"
            },
            {
                "field": "User Experience",
                "name": "Ligmie Preval",
                "profile": "Senior Usability Associate",
                "place": "Watertown, MA",
                "link": "/",
                "imageUrl": "images/ligmie_preval_wat.png"
            },
            {
                "field": "Development",
                "name": "Kevin Weaver",
                "profile": "Lead Developer",
                "place": "Watertown, MA",
                "link": "/",
                "imageUrl": "images/kevin_weaver_watertown.png"
            },
            {
                "field": "Account Management",
                "name": "Amanda Montgomery",
                "profile": "Account Manager",
                "place": "Atlanta, GA",
                "link": "/",
                "imageUrl": "images/amanda__montgomery_-atlanta_rec.png"
            },
            {
                "field": "Inside Sales",
                "name": "Andrew Kahn",
                "profile": "Sales Executive",
                "place": "Watertown, MA",
                "link": "/",
                "imageUrl": "images/andrew_kahn_sales_rec.png"
            },
            {
                "field": "Office Services",
                "name": "Stephanie Ellis",
                "profile": "Office Services Manager",
                "place": "Austin, TX",
                "link": "/",
                "imageUrl": "images/stephanie_ellis_austin_rec.png"
            },
            {
                "field": "Network Onboarding Team",
                "name": "James Dantzler",
                "profile": "Project Associate",
                "place": "Atlanta, GA",
                "link": "/",
                "imageUrl": "images/james_dantzler_atlanta_rec.png"
            }
        ]
    };
    var athenaHealth = {
        $sliderContainer: $("#da-slider"),
        $antheistasConatiner: $('#athenistas-container'),
        $dropdown: $('.dropdown'),
        drawCrousel: function () {
            var crouselTemplate = [], self = this;
            for (var i = 0; i < Data.crouselData.length; i++) {
                /* if(Modernizr.templatestrings){ // if browser support String Literal

                 }*/
                crouselTemplate.push('<div class="da-slide">' +
                    '<h2>' + Data.crouselData[i].main_title + '</h2>' +
                    '<p>' + Data.crouselData[i].title_content + '</p>' +
                    '<button class="view-job-opening btn btn-primary da-link">' + Data.crouselData[i].link_title + '&nbsp;&nbsp;<span class="glyphicon glyphicon-chevron-right"></span></button>' +
                    '<div class="da-img"><img src="' + Data.crouselData[i].image + '" alt="image001" /></div>' +
                    '</div>');
            } //end of for loop

            self.$sliderContainer.append(crouselTemplate.join(''));
            self.$sliderContainer.cslider({
                bgincrement: 0,
                autoplay: true,
                // slideshow on / off
                interval: 4000
                // time between transitions
            })
        },
        drawAthenistasProfiles: function () {
            var self = this;
            var athenistasTemplate = [];
            for (var i = 0; i < Data.athenistas.length; i++) {
                athenistasTemplate.push('<div class="parent-holder"> ' +
                    '<img src="' + Data.athenistas[i].imageUrl + '" class="full_width"> ' +
                    '<div class="hover-div"> ' +
                    '<div> <h3 class="athenistas-field">' + Data.athenistas[i].field + '</h3> ' +
                    '<div class="watch-video"> ' +
                    '<span class="playIcon"><img src="images/btn_video_drkgreen.svg"></span> ' +
                    '<div> <span>Watch Video</span> </div> ' +
                    '</div> ' +
                    '</a> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div>')
            } // for loop end
            self.$antheistasConatiner.append(athenistasTemplate.join(''));
            self.$antheistasConatiner.on('mouseenter', '.parent-holder', function () {
                $(this).find('.hover-div').stop().slideDown('slow');
            }).on('mouseleave', '.parent-holder', function () {
                $(this).find('.hover-div').stop().slideUp('slow');
            });
        }

    };

    athenaHealth.drawCrousel();
    athenaHealth.drawAthenistasProfiles();
    athenaHealth.$dropdown.on('show.bs.dropdown', function (e) {
        e.stopImmediatePropagation();
        $(this).find('.dropdown-menu').stop(true, true).slideDown();
    });
    athenaHealth.$dropdown.on('hide.bs.dropdown', function (e) {
        e.stopImmediatePropagation();
        $(this).find('.dropdown-menu').hide()
    });
});