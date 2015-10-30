/**
 * Created by rakib on 19/10/15.
 */
UI.registerHelper("money", function(amount){
    return accounting.formatMoney(amount,"£")
});

UI.registerHelper("markdown",function(text){
   var conv = new showdown.Converter();
    return conv.makeHtml(text);
});