// const twoSum = (nums, target) => {
//     let result = []


//     for (let i = 0; i < nums.length; i++) {
        
//         let  complement = target - nums[i]
//         if (nums.includes(complement, i + 1)) {
//             result = [i, nums.indexOf(complement, i+1)]
//             break;
//         }   

        
        
        
//     }
    
//     console.log(result);
//     return result
    
// }
    


// twoSum([3, 3], 6)


// var isPalindrome = function(x) {

//     if(x.toString().split('').reverse().join('') === x){
//         return true
//     } else {
//         return false
//     }

// };

// isPalindrome(1234)


document.addEventListener('DOMContentLoaded', () => {
    const userListContainer = document.getElementById('userList');
    const refreshButton = document.getElementById('refreshButton');

    refreshButton.addEventListener('click', getUsers);

    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => displayUsers(data))
            .catch(error => displayError(error));
    }

    function displayUsers(users) {
        userListContainer.innerHTML = '';
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;
            userListContainer.appendChild(card);
        });
    }

    function displayError(error) {
        userListContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }

    // Initial load of users
    getUsers();
});

