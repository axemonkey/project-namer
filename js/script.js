var projectNamer = {
  assets: {
    prefixes: [],
    animals: []
  },
  init: function(){
    $('h1').after('<div class="spinner"></div>');


    var spinner = new Spinner({
      lines: 13, // The number of lines to draw
      length: 7, // The length of each line
      width: 4, // The line thickness
      radius: 10, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      color: '#ddd', // #rgb or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: true, // Whether to use hardware acceleration
      className: 'spin', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    }).spin($('.spinner')[0]);



    // prefixes
    /*
        valid attributes:
        colour, earth, elemental, environmental, material, metal, metaphysical, metal, musical, physical, precious, scary, science, space, stone, superlative, water

        TODO:
          add:
            "cute" or "nice", e.g. "fluffy", "cuddle"
            "swearing", e.g. "fuck", "bastard"

    */
    $.ajax({
      url:      'data/prefixes.json',
      dataType: 'json',
      success:  function(response, textStatus, jqXHR){
        projectNamer.assets.prefixes = response;
        if(projectNamer.assets.animals.length > 0){
          projectNamer.start();
        }
      },
      error:    function(jqXHR, textStatus, errorThrown){
        tools.log('error');
        tools.log(textStatus);
      }
    });

    // animals
    /*
      valid attributes:
      air, amphibian, bird, crawly, crustacean, cute, fish, insect, land, mammal, mythical, primate, reptile, sea, water,

      TODO:
        add "tasty" attribute
        chuck in a couple more mythicals, insects
        maybe add "cat" attribute as there are lots
        possible attributes for environments, like "domestic", "farm" etc
    */
    $.ajax({
      url:      'data/animals.json',
      dataType: 'json',
      success:  function(response, textStatus, jqXHR){
        projectNamer.assets.animals = response;
        if(projectNamer.assets.prefixes.length > 0){
          projectNamer.start();
        }
      },
      error:    function(jqXHR, textStatus, errorThrown){
        tools.log('error');
        tools.log(textStatus);
      }
    });

    $('.another').click(function(e){
      e.preventDefault();
      projectNamer.generate();
    });
    $('.prefix').click(function(){
      projectNamer.writePrefix();
    });
    $('.animal').click(function(){
      projectNamer.writeAnimal();
    });
  },
  start: function(){
    $('.welcome, h1, .another').show();
    $('.spinner').remove();
    projectNamer.generate();
  },
  generate: function(){
    projectNamer.writePrefix();
    projectNamer.writeAnimal();
  },
  writePrefix: function(){
    var p = projectNamer.assets.prefixes[Math.floor(Math.random()*projectNamer.assets.prefixes.length)];
    $('.prefix').text(tools.ucfirst(p.title));
  },
  writeAnimal: function(){
    var a = projectNamer.assets.animals[Math.floor(Math.random()*projectNamer.assets.animals.length)];
    $('.animal').text(tools.ucfirst(a.title));
  }
};

var tools = {
  ucfirst: function(str){
    return str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase();
  },
  log: function(msg){
    if(window.console){
      console.log(msg);
    }
  },
  dir: function(obj){
    if(window.console){
      console.dir(obj);
    }
  }
};

$(function(){
  projectNamer.init();
});
