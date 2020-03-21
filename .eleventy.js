module.exports = function(config) {

    config.addPassthroughCopy("src/js");
    return  {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  
  };

  //8be691e539054fbdaad1fa6c4f6aff83
  