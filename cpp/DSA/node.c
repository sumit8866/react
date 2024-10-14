#include<stdio.h>
#include<conio.h>
struct node{
        int data;
        char ch;
        struct node*ptr;
};

int main()
{
        struct node x,y,z;
        x.data=65;
        x.ch='A';
        x.ptr=NULL;


        y.data=80;
        y.ch='B';
        y.ptr=NULL;

        z.data=90;
        z.ch='C';
        z.ptr=NULL;

        printf("%d\t%c\n",x.data,x.ch);
        printf("%d\t%c\n",y.data,y.ch);
        printf("%d\t%c\n",z.data,z.ch);

        x.ptr=&z;
        y.ptr=&x;
        z.ptr=&y;

        printf("%d\t%c\n",x.ptr->data,x.ptr->ch);
        printf("%d\t%c\n",y.ptr->data,y .ptr->ch);
        printf("%d\t%c\n",z.ptr->data,z .ptr->ch);


return 0;
}
