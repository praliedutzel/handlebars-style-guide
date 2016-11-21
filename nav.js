// NAVIGATION CONTROLLER

var navigation = {
    'navItems' : [
        {
            'navTitle' : 'Overview',
            'navLink' : 'index.html',
            'navSubMenu' : []
        },
        {
            'navTitle' : 'Components',
            'navLink' : 'components/index.html',
            'navSubMenu' : [
                {
                    'subMenuTitle' : 'Template',
                    'subMenuLink' : 'components/template.html'
                }
            ]
        },
        {
            'navTitle' : 'Style Guide Maintenance',
            'navLink' : 'maintenance.html',
            'navSubMenu' : []
        },
    ]
};

var navTemplate = Handlebars.templates.nav(navigation);
$('body').prepend(navTemplate);


// Click handler to open and close the main menu
$('.style-menu-button').on('click', function() {
    if ( $(this).text().indexOf('Open') ) {
        $(this).text('Open Menu');
    } else {
        $(this).text('Close Menu');
    }

    $('body').toggleClass('prevent-scroll');
    $('.style-menu').toggleClass('is-open');

    return false;
});

// Click handler to open and close the submenus
$('.style-menu-item.style-menu-has-submenu').on('click', function() {
    $(this).next('.style-submenu').slideToggle();
    return false;
});