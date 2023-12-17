package org.example.Generic;

public class Mylist <T>{
    private T[] list;
    public Mylist(){
        this.list=(T[]) new Object[10];
    }
    public void add(T data){
        int size=getSize();
        T[] list;
        list = (this.list[getSize()-1] != null) ? (T[]) new Object[size*2] : (T[]) new Object[size];
        for (int i=0; i<size; i=i+1) {
            if (isEmptyValue(i)==true){
                list[i]=data;
                break;
            }
            else {
                list[i]=this.list[i];
            }
        }
        this.list=list;
    }
    public int getSize(){
        return (this.list == null) ? 0 : this.list.length;
    }
    public T indexOf(int count){
        return this.list[count] == null ? null : this.list[count];
    }
    public int lastIndexOf(T value){
        int count = -1;
        for (int i=0;i<getSize();i=i+2){
            count = this.list[i] == value ?  this.list.length : count;

        }
        return count;
    }
    public void clear(){
        this.list=null;
    }
    public boolean contains(T data){
        int size=getSize();
        boolean isTrue = false;
        for (int i=0; i<size; i=i+1) {
            isTrue = this.list[i] == data ? true : false;
        }
        return isTrue;
    }
    public T[] subList(int startIndex, int endIndex){
        T[] list = (T[]) new Object[endIndex-startIndex];
        int count=0;
        for (int i=startIndex; i<endIndex; i=i+1){
            list[count]=this.list[i];
            count = count + 1;
        }
        return list;
    }
    public boolean isEmpty(){
        return this.list==null;
    }
    public boolean isEmptyValue(int count){
        return this.list[count]==null;
    }
}
