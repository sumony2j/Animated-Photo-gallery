$(document).ready(function(){
 $("#Animals").click(function(){
     $(".Animals").show("slow");
     $("#list li").not("#list li.Animals").hide("slow");
 })
 $("#Nature").click(function(){
     $(".Nature").show("slow");
      $("#list li").not("#list li.Nature").hide("slow");
 })
    $("#Food").click(function(){
     $(".Food").show("slow");
     $("#list li").not("#list li.Food").hide("slow");
 })
    $("#Birds").click(function(){
     $(".Birds").show("slow");
    $("#list li").not("#list li.Birds").hide("slow");
 })
    $("#Car").click(function(){
    $(".Car").show("slow");
    $("#list li").not("#list li.Car").hide("slow"); 
 })
   $("#All").click(function(){
       $("#list li").show("slow");
   }) 
});
 