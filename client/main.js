import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout", {nav: "nav", main: "home", footer: "footer"});
    }
});

FlowRouter.route('/about', {
    action: function(params) {
        BlazeLayout.render("layout", {nav: "nav", main: "about", footer: "footer"});
    }
});

FlowRouter.route('/services', {
    action: function(params) {
        BlazeLayout.render("layout", {nav: "nav", main: "services", footer: "footer"});
    }
});

FlowRouter.route('/contact', {
    action: function(params) {
        BlazeLayout.render("layout", {nav: "nav", main: "contact", footer: "footer"});
    }
});

Template.nav.events({
    'click .toggleNav'(event, instance){
        $('.flex-nav ul').toggleClass('open');
    }
})

Template.services.helpers({
    services(){
        return [
            {id: "service-1", title : "Exterior", template : "list", items: [
                {name: "Condition of doors and windows"},
                {name: "Condition of decks, porches, stoops, stairs and railing"},
                {name: "Condition of brick or exterior siding"},
                {name: "Condition of weather stripping, caulking, exterior paints, stains and sealant"},
            ]},
            {id: "service-2", title : "Interior", template : "list", items: [
                {
                 "name": "Condition of vents"
                },
                {
                 "name": "Condition of appliances"
                },
                {
                 "name": "Condition of walls, ceilings, floors, closets, cabinets and shelving"
                },
                {
                 "name": "Any signs of moisture intrusion, visable mold or mildew "
                },
                {
                 "name": "Condition of flooring, tile and carpets"
                },
                {
                 "name": "Condition of vents"
                },
                {
                 "name": "Any visible structural problems"
                }
            ]},
            {id: "service-3", title : "Attic", template : "list", items: [
                {
                 "name": "Any visible signs of mildew or mold"
                },
                {
                 "name": "Any visible roof leaks or stains caused from leakage"
                },
                {
                 "name": "Evaluate for ventilation and insulation"
                },
                {
                 "name": "Overall structural construction"
                }
            ]},
            {id: "service-4", title : "Roofing", template : "list", items: [
                {
                  "name": "Condition of the roof covering, missing shingles or signs of wear"
                 },
                 {
                  "name": "Condition of the flashings, valleys, skylights, vents and other roof penetrations"
                 },
                 {
                  "name": "Condition of the gutters, downspouts and overhangs"
                 },
                 {
                  "name": "Any visible structural problems"
                 }
             ]},
            {id: "service-5", title : "Heating and Cooling", template : "list", items: [
                {
                  "name": "Visible condition and overall function of furnace, heat pumps and air conditioners"
                 },
                 {
                  "name": "Condition of ductwork"
                 },
                 {
                  "name": "Condition and type of heating system"
                 },
                 {
                  "name": "Condition of venting"
                 },
                 {
                  "name": "Condition of accessable furnace filter"
                 },
                 {
                  "name": "Inspect thermostat operation"
                 }
             ]},
            {id: "service-6", title : "Plumming and Fixtures", template : "list", items: [
                {
                 "name": "Observation of main shutoff valve and supply line"
                },
                {
                 "name": "Report on visible leaks in piping, valves and traps"
                },
                {
                 "name": "Report on function, flow and drainage of fixtures, faucets and drains"
                },
                {
                 "name": "Condition of water heater"
                },
                {
                 "name": "Inspect outdoor hose bibs and faucets and locating shut off valves"
                },
                {
                 "name": "Condition of toiltes, checking for cracks, loose conntections and tank filling systems"
                },
                {
                 "name": "Condition of sump pump, flat, drain and shut off function"
                }
            ]},
            {id: "service-7", title : "Electrical Systems", template : "list", items: [
                {
                  "name": "Condition of main disconnect and service line cables"
                 },
                 {
                  "name": "Insect for appropriate bonding and grounding"
                 },
                 {
                  "name": "Condition of breakers and fuses"
                 },
                 {
                  "name": "Condition of visible connectors and wiring"
                 },
                 {
                  "name": "Condition of switches and light fixtures"
                 }
             ]},
            {id: "service-8", title : "Basements, Crawlspaces and Foundations", template : "list", items: [
                {
                  "name": "Condition of crawlspace, reporting any signs of moisture or sinking floors over crawlspaces"
                 },
                 {
                  "name": "Inspect basement for moisture and condition of waterproofing system"
                 },
                 {
                  "name": "Report on bowing foundation walls, settlement and cracking"
                 }
             ]},
            {id: "service-9", title : "Chimneys and Fireplaces", template : "list", items: [
                {
                  "name": "Condition of damper in fireplace"
                 },
                 {
                  "name": "Condition of firebox"
                 },
                 {
                  "name": "Condition of chimney, flute cap, crown and flashing"
                 },
                 {
                  "name": "Condition of chimney bricks"
                 },
                 {
                  "name": "Condition of mortar"
                 }
             ]},
            {id: "service-10", title : "Exterior Grounds", template : "list", items: [
                {
                  "name": "Condition of driveways and walkways"
                 },
                 {
                  "name": "Inspect for grading that allows propper drainage"
                 },
                 {
                  "name": "Report on possible future damage from trees and shrubs"
                 }
             ]},
            {id: "service-11", title : "Safety Issues", template : "list", items: [
                {
                  "name": "Condition or absence of smoke detectors"
                 },
                 {
                  "name": "Condition or absence of alarm system"
                 },
                 {
                  "name": "Condition of garage door an sensors"
                 },
                 {
                  "name": "Condition of railing and report on loose steps"
                 },
                 {
                  "name": "Condition of locks and latches"
                 }
             ]}
        ];
    }
})
