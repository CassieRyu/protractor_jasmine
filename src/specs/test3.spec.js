'use strict';

describe('scenario 3 homepage todo list', function() {
    it('should add a todo', function() {
        browser.get(browser.baseUrl);

        element(by.model('todoList.todoText')).sendKeys('write third protractor test');
        element(by.css('[value="add"]')).click();


        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write third protractor test');


        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});