/**
 * 1. 利用递归求n的阶乘
 * 2. 利用递归求斐波那契数列的第n位
 * 3. 利用递归求两个数字最大公约数（看图写代码）
 * 4. 编写一个函数，输入n为偶数时，调用函数求1/2+1/4+...+1/n,当输入n为奇数时，调用函数求1+1/3+...+1/n    循环和递归
 * 5. 测试事件
 *
 */
//TODO 实现代码好像没问题，可能测试代码有问题
describe("给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。", () => {
    function reverseList(head) {
        if (head == null || head.next == null) {
            return head;
        }
        const newHead = reverseList(head.next);
        let next = head.next;
        next.next = head;
        head.next = null;
        return newHead;
    };

    it('1', function () {
        let head = [1, 2, 3, 4, 5]
        let result = [5, 4, 3, 2, 1];
        let list = reverseList(head);
        console.log(list);
        // expect(list).toStrictEqual(result)
    });


    it('2', function () {
        let head = [1,2]
        let result = [2, 1];
        expect(reverseList(head)).toStrictEqual(result)
    });

    it('3', function () {
        let head = []
        let result = [];
        expect(reverseList(head)).toStrictEqual(result)
    });


});

describe("1. 利用递归求n的阶乘", () => {

    // n! = 1 * 2 * 3 * ... * (n - 2) * (n - 1) * n

    /***
     *  5! = 5*4*3*2*1
     *  1! = 1 * 1
     *  2! = 2 * 1
     *     = 2
     *  3! = 3 * 2 * 1
     *     = n * (n-1) * 1
     *  4! = 4 * 3 * 2 * 1
     *     = 4 * (3 * 2 * 1)
     *     = 4 * 3!
     *     = n * (n-1)!
     */

    function factorial(n) {
        if (n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }


    it('1', function () {
        let n = 1
        let result = 1;
        expect(factorial(n)).toStrictEqual(result)
    });

    it('2', function () {
        let n = 2
        let result = 2;
        expect(factorial(n)).toStrictEqual(result)
    })

    it('3', function () {
        let n = 3
        let result = 6;
        expect(factorial(n)).toStrictEqual(result)
    })

    it('4', function () {
        let n = 4
        let result = 24;
        expect(factorial(n)).toStrictEqual(result)
    })

    it('10', function () {
        let n = 10
        let result = 3628800;
        expect(factorial(n)).toStrictEqual(result)
    })


});


describe("2. 利用递归求斐波那契数列的第n位", () => {


    /***
     *  1，1，2, 3, 5, 8, 13, 21 ...
     *     fn(1) = 1
     *     fn(2) = 1
     *     fn(3) = 2
     *           = 1 + 1
     *           = fn(1) + fn(2)
     *
     *     fn(4) = 3
     *           = 1 + 2
     *           = fn(2) + fn(3)
     *           = fn(4 - 2) + fn(4 - 1)
     *
     *     fn(n) = fn(n - 2) + fn(n - 1)
     *
     */


    function fibonacci(n) {
        if (n === 1 || n === 2) {
            return 1;
        }
        return fn(n - 1) + fn(n - 2);
    }

    it('1', function () {
        let n = 1
        let result = 1;
        expect(fibonacci(n)).toStrictEqual(result)
    });

    it('5', function () {
        let n = 5
        let result = 5;
        expect(fibonacci(n)).toStrictEqual(result)
    })

});


describe("leetcode 面试题 08.05. 递归乘法", () => {

    // 递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。
    /***
     *  两个正整数的相乘 拆解为加法
     *  定义函数 multiply(a,b) = a * b
     *  5 * 1 = 5
     *  5 * 2 = 5 + 5
     *  5 * 3 = 5 + 5 + 5
     *  5 * 4 = 5 + (5 + 5 + 5)
     *        = 5 + (5 * 3)
     *        = 5 + m(5, 3)
     *        = a + m(a, b-1)
     */

    function multiply(A, B) {
        if (B === 0)
            return 0;
        return A + multiply(A, B - 1);
    }


    it('1', function () {
        let a = 1
        let b = 10
        let result = 10;
        expect(multiply(a, b)).toStrictEqual(result)
    });

    it('2', function () {
        let a = 3
        let b = 4
        let result = 12;
        expect(multiply(a, b)).toStrictEqual(result)
    });
})


