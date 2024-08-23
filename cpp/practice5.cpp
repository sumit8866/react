#include<iostream>
using namespace std;

int main()
{
    int i, j;
    char string1[500];
    char string2[500];
    char string3[500];

    cout  << "enter first string:";
    cin >>string1;
    cout<<"enter second string:";
    cin >> string2;

    for (i = 0; string1[i] != '\0'; i++)
    {

        string3[i] = string1[i];
    }

    for (j = 0; string2[j] != '\0'; j++)
    {

        string3[i] = string2[j];
        i++;
    }

    string3[i] = '\0';
    cout<<  string3;

    return 0;
}