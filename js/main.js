$(function() {
    'use strict'

    var changeInputsOnResize = function() {
        $('body').find('input[value="Add to My Cart"]').each(function() {
            $(this).attr('value', 'Add')
        })
    }

    var changeInputsBack = function() {
        $('body').find('input[value="Add"]').each(function() {
            $(this).attr('value', 'Add to My Cart')
        })
    }

    var changeInputs = function() {
        var winW = $(window).width();
        winW <= 480 ? changeInputsOnResize() : changeInputsBack()
    }

    $(window).on('resize', changeInputs)

    changeInputs()

})