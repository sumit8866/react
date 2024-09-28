#include<stdio.h>

int f=-1;
int r=-1;

void enqueue(int x,int queue[],int n){

    if (r==n-1){
        printf("queue is full");
    }else if(r==-1&&f==-1){
        f=r=0;
        queue[r]=x;
    }else {
        r++;
        queue[r]=x;
    }
}
void dequeue(){
    if(r==-1 && f==-1){
        printf("queue is empty");
    }else if(f==r){
        f=r=-1;
        
    }else{
        f++;
    }
}
void display(int queue[]){

    if (r==-1 && f==-1){
        printf("queue is empty");
    }else{
        for (int i=f ; i<= r;i++){
            printf("%d ",queue[i]);
        }
    }
}   
int main(){
    int n=5;
    int queue[n];

enqueue(10,queue,n);
enqueue(20,queue,n);
enqueue(30,queue,n);
enqueue(40,queue,n);
display(queue);
dequeue();
dequeue();
printf("\n");
display(queue);


}
