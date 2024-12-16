# JavaScript Null Handling Bug

This repository demonstrates a subtle bug in JavaScript related to null handling and provides a solution.

## Bug Description

The JavaScript function `foo` is designed to add two numbers.  It correctly handles cases where either `a` or `b` is null by returning null.  However, when both `a` and `b` are null, it still attempts to perform addition leading to unexpected behavior.

## Bug Solution

The solution involves explicitly checking if both `a` and `b` are null before performing the addition.  If both are null, the function returns null; otherwise, it proceeds with the addition operation.

## How to reproduce the bug
1. Clone the repository
2. Run `bug.js`