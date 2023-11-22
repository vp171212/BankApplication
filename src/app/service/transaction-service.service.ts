import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  dateFilterUrl="https://localhost:7277/api/Transaction";

  depositeTransactionUrl="https://localhost:7277/api/Transaction/deposit"

  withdrawTransactionUrl="https://localhost:7277/api/Transaction/Withdrawal"

  transferTransactionUrl="https://localhost:7277/api/Transaction/TransferAmount"

  showAllTransactionsUrl="https://localhost:7277/api/Transaction/showAllTransaction";

  showActiveTransactionUrl="https://localhost:7277/api/Account/activeAccounts";


  constructor(private http:HttpClient) { }

  public showActiveAccountNumber()
  {
    return this.http.get(this.showActiveTransactionUrl)
  }


getTransactionByDate(data:any)
{
  return this.http.get(this.dateFilterUrl+"/"+data)
}

DepositeAmount(data:any)
{
  return  this.http.post(this.depositeTransactionUrl,data)
}

withdrawAmount(data:any)
{
  return this.http.post(this.withdrawTransactionUrl,data)
}

transferAmount(data:any)
{
  return this.http.post(this.transferTransactionUrl,data)
}

showAllTransaction()
{
  return this.http.get(this.showAllTransactionsUrl)
}


}
