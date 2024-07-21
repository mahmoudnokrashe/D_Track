document.getElementById('type').addEventListener('change', function() {
    var type = this.value;
    var mediaOptions = document.getElementById('mediaOptions');
    if (type === 'image') {
        mediaOptions.innerHTML = '<label for="background">اختر خلفية:</label><input type="file" id="background" name="background" accept="image/*"><label for="text">نص الإعلان:</label><input type="text" id="text" name="text">';
    } else if (type === 'video') {
        mediaOptions.innerHTML = '<label for="background">اختر خلفية فيديو:</label><input type="file" id="background" name="background" accept="video/*"><label for="text">نص الإعلان:</label><input type="text" id="text" name="text">';
    } else if (type === 'audio') {
        mediaOptions.innerHTML = '<label for="text">نص الإعلان:</label><input type="text" id="text" name="text">';
    } else if (type === 'article') {
        mediaOptions.innerHTML = '<label for="text">نص الإعلان:</label><textarea id="text" name="text" rows="4" cols="50"></textarea>';
    }
});

document.getElementById('generateAd').addEventListener('click', async function() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var type = document.getElementById('type').value;
    var text = document.getElementById('text').value;
    var background = document.getElementById('background').files[0];
    
    var generatedAdContent = document.getElementById('generatedAdContent');
    
    if (type === 'image') {
        generatedAdContent.innerHTML = '<h3>' + title + '</h3><p>' + description + '</p><img src="' + URL.createObjectURL(background) + '" alt="Ad Background"><p>' + text + '</p>';
    } else if (type === 'video') {
        generatedAdContent.innerHTML = '<h3>' + title + '</h3><p>' + description + '</p><video controls src="' + URL.createObjectURL(background) + '"></video><p>' + text + '</p>';
    } else if (type === 'audio') {
        generatedAdContent.innerHTML = '<h3>' + title + '</h3><p>' + description + '</p><audio controls src="' + URL.createObjectURL(background) + '"></audio><p>' + text + '</p>';
    } else if (type === 'article') {
        const generatedText = await generateTextWithAI(text);
        generatedAdContent.innerHTML = '<h3>' + title + '</h3><p>' + description + '</p><p>' + generatedText + '</p>';
    }

    document.querySelector('.generated-ad').style.display = 'block';
});

async function generateTextWithAI(prompt) {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: prompt,
        max_tokens: 100
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // استبدل YOUR_API_KEY بمفتاح API الخاص بك
        }
    });
    return response.data.choices[0].text;
}

document.getElementById('saveAd').addEventListener('click', function() {
    // يمكن إضافة دالة لحفظ الإعلان في قاعدة البيانات
    alert('تم حفظ الإعلان بنجاح');
});

function loadAds() {
    // يمكن تعديل هذه الدالة لتقوم بجلب البيانات من قاعدة البيانات وعرضها
    var ads = [
        {title: 'إعلان 1', type: 'صورة', price: 10},
        {title: 'إعلان 2', type: 'فيديو', price: 20}
    ];
    var adsTable = document.getElementById('adsTable');
    ads.forEach(function(ad) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + ad.title + '</td><td>' + ad.type + '</td><td>' + ad.price + '</td><td><button>تعديل</button> <button>حذف</button></td>';
        adsTable.appendChild(row);
    });
}

window.onload = loadAds;
