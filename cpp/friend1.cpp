#include <iostream>
using namespace std;

class Number{
    public:
        int num1, num2;
        void data(){
            cout <<"enter number 1:";
            cin>>num1;
            cout <<"enter number 2:";
            cin >>num2;
        }

    friend int find(Number n);
};

int find(Number n){
    int biggest;
    if(n.num1 > n.num2){
        biggest = n.num1;
    }
    else{
        biggest = n.num2;
    }
    return biggest;
}

int main(){
    Number n;
    n.data();

    int biggest = find(n);
    cout << "The biggest number is: " << biggest << endl;
    return 0;
}