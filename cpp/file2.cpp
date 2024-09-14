#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    char in[50];
    // store file data 
    ofstream os;
    os.open("abc.txt");

    cout<<"please enter your name :"<<endl;
    cin.getline(in,100);
    os<<in<<endl;
    cout<<"please enter moblie number"<<endl;
    cin>>in;
    cin.ignore();
    os<<in<<endl;
    os.close();
    


    ifstream is;
    string line;
    is.open("abc.txt");

    cout <<"reading from a text:"<<endl;
    while(getline(is,line))
    {
        cout<<line<<endl;

    }
    is.close();


return 0;
}