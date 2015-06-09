(function (window, document, $) {

  Drupal.behaviors.membership_page = {
    attach: function (context, settings) {
      // Membership types TABS
      $('.membership-types ul li').click(function(event) {
        event.preventDefault();
        var pane = $(this).data('rel');
        if (pane && pane != '') {
          $('.membership-types ul li.active').removeClass('active');
          $(this).addClass('active');
          $('.membership.active').removeClass('active');
          $(pane).addClass('active');
        }
      });
      // Membership plans MORE BENEFITS
      $('.more-benefits').click(function(event) {
        var $plan = $(this).parent();
        if ($plan.hasClass('collapsed')) {
          $plan.parent('.membership').find('.membership-plan').addClass('collapsed');
          $plan.removeClass('collapsed');
        }
        else {
          $plan.addClass('collapsed');
        }
      });
      // Membership purchase BUTTONS
      $('.btn-membership').click(function(event) {
        if (!$(this).hasClass('selected')) {
          $('.btn-membership').removeClass('selected');
          $(this).addClass('selected');
          $('.membership-purchace').addClass('active');
        }
        else {
          $(this).removeClass('selected');
          $('.membership-purchace').removeClass('active');
        }
      });
    }
  };

  Drupal.behaviors.navigation_menu = {
    attach: function (context, settings) {
      $('.menu-collapsed').click(function(event) {
        if ($('body').hasClass('menu-shifted')) {
          $('body').removeClass('menu-shifted');
        }
        else {
          $('body').addClass('menu-shifted');
        }
      });
    }
  };

}(this, this.document, this.jQuery));
