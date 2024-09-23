#include <iostream>
using namespace std;

class bank_account
{
public:
    char name[100];
    int accno;
    int balance = 0;

    void accountdetail()
    {
        cout<< "------------------------------"<<endl;
        cout<< "|    Enter Customer Name:    |"<<endl;
        cout<< "------------------------------"<<endl;
        
        cin >> name;
        cout<< "------------------------------"<<endl;
        cout<< "|    Enter Account Number:    |"<<endl;
        cout<< "------------------------------"<<endl;
        
        cin >> accno;

    }

    void displaydetail()
    {
         cout<<"--------------------"<<endl;
        cout<< "|   Customer Name    |:"<<name<<endl;
        cout<< "--------------------"<<endl;
         cout<<"---------------------"<<endl;
        cout<< "|   Account Number   |:"<<accno<<endl;
        cout<< "---------------------"<<endl;
        
    }

    void display()
    {
        cout<< "---------------------"<<endl;
        cout<< "|   Balance          |:"<<balance<<endl;
        cout<< "---------------------"<<endl;
        
    }

    void deposit()
    {
        float deposit;
        cout << "|   Enter amount to Deposit   |:" << endl;
        cin >> deposit;
        balance = deposit+balance;
        cout << "|   current balance   |: " << balance << endl;
    }

    void withdraw()
    {
        float withdraw;
        cout << "|   Balance   |: " << balance << endl;
        cout << "|   Enter amount to be withdraw   |: ";
        cin >> withdraw;
        if (withdraw <= balance)
        {
            balance =balance-withdraw;
            cout << "|   balance amount after withdraw   |: " << balance << endl;
        }
        else
        {
            cout << "|   insufficient balance for the requested withdrawal  |" << endl;
        }
    }
};

int main()
{
    bank_account s1;
    s1.accountdetail();
    int ac;
    do{
        {
            cout<< "------------------------------"<<endl;
            cout<< "|       bank managment       |"<<endl;
            cout<< "------------------------------"<<endl;
            cout << "|   Choose Your Option:            |" << endl;
            cout << "|   enter 1 for  check Balance     |" << endl;
            cout << "|   enter 2 for  deposit           |" << endl;
            cout << "|   enter 3 for  withdraw          |" << endl;
            cout << "|   enter 4 for  account Details   |" << endl;
            
            cout << "|   enter 0 for  Exit              |" << endl;
            cout << "----------------------------------- " << endl;
            cout << "|   Enter Your choice   |: ";
            cin >> ac;

            switch (ac)
            {
            case 1:
                s1.display();
                break;
            case 2:
                s1.deposit();
                break;
            case 3:
                s1.withdraw();
                break;
            case 4:
                s1.displaydetail();
                s1.display();
                break;
            case 0:
                cout << "--------------------------------" << endl;
                cout << "|Thank you for banking with us |" << endl;
                cout << "--------------------------------" << endl;
                return 0;
            default:
                cout << "|   enter valid number   |" << endl;
            }
        }   
    } while(ac !=0);

    return 0;
}
