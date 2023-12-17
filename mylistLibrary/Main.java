package org.example.Generic;

public class Main {
    public static void main(String []args){
        Mylist <String> list = new Mylist<String>();
        list.add("0. eleman");
        list.add("1. eleman");
        list.add("2. eleman");
        list.add("3. eleman");
        list.add("4. eleman");
        list.add("5. eleman");
        list.add("6. eleman");
        list.add("7. eleman");
        list.add("8. eleman");
        list.add("9. eleman");
        list.add("10. eleman");
        list.add("11. eleman");
        list.add("12. eleman");
        list.add("13. eleman");
        System.out.println((String) list.indexOf(12));
    }
}
