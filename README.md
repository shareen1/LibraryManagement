# Developer Challenge

We would like you to create a simple program to help us manage books at a library. The program should allow us to write a script that interacts with the copies of books and check the stock at the end.

We are not looking for anything clever here, just an example of how you use your chosen programming language to solve a simple problem and how you organize your code.

## 1. Lookup

The list books that can be added to the library is available in the [`catalog.csv`](catalog.csv) file in this repo. The first column in the CSV is the ISBN of the book, followed by the title, author, and publication date.

Please provide a method that can take an ISBN and prints all the catalog information about that book. For example:

```ruby
my_library.lookup('9780143111597')
# => The Left Hand of Darkness, by Ursula K. Le Guin (1969)
```

## 2. Add books to the library

You can add a book from the catalog to the library, and optionally add multiple copies of the same book at once.

```ruby
my_library.add('9781472258229')
my_library.add('9781472258229', 5) # Adds 5 copies of the book at once
```

## 3. Borrowing and reuturning copies of books

Books can be borrowed or returned to the library:

```ruby
my_library.borrow('9781472258229')
my_library.return('9781472258229')
```

## 4. Checking stock

You can print the available copies of books at the library. This should print all books in the catalog, even if there are zero copies in the library. It should also display how many books are available (i.e. the total number of copies of the book the library owns, minus the number of copies that have been borrowed).

```ruby
my_library.stock
# 9780143111597, Copies: 0, Available: 0
# 9781472258229, Copies: 1, Available: 0
# 9780441569595, Copies: 3, Available: 2
# 9781857231380, Copies: 0, Available: 0
# 9780553283686, Copies: 0, Available: 0
```

## Example

This is a more complete example of a script we could use to interact with the library.

```ruby
cork_city = Library.new

cork_city.lookup("9781472258229") # => 'Kindred, by Octavia E. Butler (1979)'
cork_city.add("9781472258229")

cork_city.lookup("9780441569595") # => 'Neuromancer, by William Gibson (1984)'
cork_city.add("9780441569595", 3)

cork_city.borrow("9781472258229") # Borrow a copy of 'Kindred'
cork_city.borrow("9780441569595") # Borrow a copy of 'Neuromancer'
cork_city.borrow("9780441569595") # Borrow another copy of 'Neuromancer'
cork_city.return("9780441569595") # Return a copy of 'Neuromancer'

cork_city.stock
# 9780143111597, Copies: 0, Available: 0
# 9781472258229, Copies: 1, Available: 0
# 9780441569595, Copies: 3, Available: 2
# 9781857231380, Copies: 0, Available: 0
# 9780553283686, Copies: 0, Available: 0
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
##Setup
-----------
1.Clone the git code LibraryManagement

2.Import Java source code of LibraryManagement
 into Eclipse

![image](https://user-images.githubusercontent.com/7882959/136127231-b6c60fe2-a1f7-4d01-b962-127a423bfab8.png)

3.add a server into Eclipse as shown ( i used tomcat 8.5 here)
![image](https://user-images.githubusercontent.com/7882959/136127266-5d35ab62-142a-44c0-95f5-b622f11d494f.png)

4.Build and run the project LibraryManagement, once it is running
![image](https://user-images.githubusercontent.com/7882959/136127340-47f28b1f-5b18-47c1-a605-157ebf10fbe1.png)

5.  open the URL http://localhost:8080/LM/ in chrome(note the server of port )
![image](https://user-images.githubusercontent.com/7882959/136127491-e2b1934d-7123-45db-bf40-f33c44020944.png)

#Unit Test 
----------
1.add 100 stock to the first one

![image](https://user-images.githubusercontent.com/7882959/136127781-00497b90-7893-4a7c-8a91-9601fb249fa0.png)
![image](https://user-images.githubusercontent.com/7882959/136127833-ff6aa3de-5191-42e8-9c4f-b995c0b84811.png)

2.borrow one book from first one (click borrow button next to book listed)

![image](https://user-images.githubusercontent.com/7882959/136127833-ff6aa3de-5191-42e8-9c4f-b995c0b84811.png)
![image](https://user-images.githubusercontent.com/7882959/136127975-82a19e68-4c76-4742-a7c3-5b4d655e760c.png)

3.return the book (click return button )

![image](https://user-images.githubusercontent.com/7882959/136127975-82a19e68-4c76-4742-a7c3-5b4d655e760c.png)
![image](https://user-images.githubusercontent.com/7882959/136128094-aca6ffa9-7c1d-4645-9984-90dab49325aa.png)

 4. Add new book (click new book button above the table) you can save or delete the record
 
 ![image](https://user-images.githubusercontent.com/7882959/136128174-b520c499-29c4-4803-a5ab-57bf0de1bfcf.png)
![image](https://user-images.githubusercontent.com/7882959/136128324-18704cd9-90fc-43d0-8d68-c85f34e2fc6e.png)
![image](https://user-images.githubusercontent.com/7882959/136128366-e7f7cd2f-c5f1-4971-aa5d-f8bd0e6687b8.png)

5.if stock empty it sends an aler messege

![image](https://user-images.githubusercontent.com/7882959/136276905-38edb63b-f057-4ea7-bd03-033b3d6e3704.png)

6.if book is every copies at librery then returning is not allowed
![image](https://user-images.githubusercontent.com/7882959/136277290-3e2ea9ea-d322-4b24-ba1f-b908b89fbb94.png)





