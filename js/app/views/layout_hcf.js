define(['backbone.marionette', 'hb!template/layout_hcf.hb'],
function(Marionette, HCFLayout){
	var hcfLayout = Marionette.Layout.extend({
        template: HCFLayout,
        regions: {
            header: "#header",
            content: "#content",
            footer: "#footer"
        },
        className: "hcfLayout"
	});

	return hcfLayout;
});