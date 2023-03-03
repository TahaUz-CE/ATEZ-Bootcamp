const dummyData = [
    {
        id: 1,
        title: "iPhone 8",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Green',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 2,
        title: "iPhone X",
        description: "An apple mobile which is nothing like apple",
        price: 649,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Black',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 3,
        title: "iPhone XS",
        description: "An apple mobile which is nothing like apple",
        price: 749,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Red',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 4,
        title: "iPhone 11",
        description: "An apple mobile which is nothing like apple",
        price: 849,
        discountPercentage: 1.96,
        rating: 8.69,
        stock: 94,
        brand: "Apple",
        color: 'Gray',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 5,
        title: "Galaxy S23",
        description: "An Samsung mobile which is nothing like apple",
        price: 649,
        discountPercentage: 2.96,
        rating: 7.69,
        stock: 194,
        brand: "Samsung",
        color: 'Green',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 6,
        title: "Galaxy S22",
        description: "An Samsung mobile which is nothing like apple",
        price: 549,
        discountPercentage: 3.96,
        rating: 3.69,
        stock: 80,
        brand: "Samsung",
        color: 'Black',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 6,
        title: "Abra A7",
        description: "An Monster laptop which is nothing like apple",
        price: 349,
        discountPercentage: 4.96,
        rating: 4.69,
        stock: 80,
        brand: "Monster",
        screenDimentions: 17,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 7,
        title: "Tulpar T7",
        description: "An Monster laptop which is nothing like apple",
        price: 449,
        discountPercentage: 5.96,
        rating: 5.69,
        stock: 80,
        brand: "Monster",
        screenDimentions: 15,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 7,
        title: "Victus",
        description: "An HP laptop which is nothing like apple",
        price: 449,
        discountPercentage: 6.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        screenDimentions: 14,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 8,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 7.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: true,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 9,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 8.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: false,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 10,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 9.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: false,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 11,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 10.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: true,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 12,
        title: "IPad Air",
        description: "An Apple product which is nothing like apple",
        price: 1449,
        discountPercentage: 11.96,
        rating: 2.69,
        stock: 12,
        brand: "Apple",
        celluar: false,
        wifi:true,
        color: 'blue',
        category: "tablet",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 13,
        title: "IPad Pro",
        description: "An Apple tablet which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        celluar: true,
        wifi:false,
        color: 'black',
        category: "tablet",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    }
];

// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.


// donecegimiz datalar.
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}





interface IProduct {
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;
    id: number | string;
    thumbnail: string
    stock: number;
}

interface ISmartPhone extends IProduct {
    color?: string;
}

interface ILaptop extends  IProduct {
    discountPercentage: number,
    screenDimentions?: number,
}

interface ITablet extends ISmartPhone {
    cellular?: boolean;
    wifi?: boolean;
}

interface ITelevision extends IProduct {
    smartTv?:boolean;
}


interface IProductApi {
    findAll: () => IProduct[];
    findPhoneAll: () => ISmartPhone[];
    findTelevisionAll: () => ITelevision[];
    findLaptopAll: () => ILaptop[];
    findTabletAll: () => ITablet[];
    findByColor<T extends ISmartPhone>(color: string): T[];
    findByCategory<T extends IProduct>(category: string): T[];
    findByMaxRating<T extends IProduct>(raiting: number): T[];
    findBySmartTv<T extends ITelevision>(smartTv: boolean): T[];
    findByWifi<T extends ITablet>(wifi: boolean): T[];
    findByDiscountPercentage<T extends ILaptop>(discountPercentage: number): T[];
    findByText: (input:string) => void;
}

class ProductApi implements IProductApi {
    findAll (): IProduct[] {
        return dummyData
    }

    findPhoneAll (): ISmartPhone[] {
       return dummyData.filter(item => item.category === "smartphones");
    }

    findTelevisionAll (): ITelevision[] {
       return dummyData.filter(item => item.category === "television");
    }

    findLaptopAll (): ILaptop[] {
       return dummyData.filter(item => item.category === "laptop");
    }

    findTabletAll (): ITablet[] {
       return dummyData.filter(item => item.category === "tablet");
    }

    findByColor<T extends ISmartPhone>(color: string): T[] {
        const products = this.findPhoneAll();
        return products.filter((product) => product.color === color) as T[];
    }

    findByCategory<T extends IProduct>(category: string): T[] {
        const products = this.findAll();
        return products.filter((product) => product.category === category) as T[];
    }

    findByMaxRating<T extends IProduct>(rating: number): T[] {
        const products = this.findAll();
        return products.filter((product) => product.rating <= rating) as T[];
    }

    findBySmartTv<T extends ITelevision>(smartTv: boolean): T[] {
        const products = this.findTelevisionAll();
        return products.filter((product) => product.smartTv === smartTv) as T[];
    }

    findByWifi<T extends ITablet>(wifi: boolean): T[] {
        const products = this.findTabletAll();
        return products.filter((product) => product.wifi === wifi) as T[];
    }
    
    findByDiscountPercentage<T extends ILaptop>(discountPercentage: number): T[] {
        const products = this.findLaptopAll();
        return products.filter((product) => product.discountPercentage <= discountPercentage) as T[];
    }

    findByText(input: string) {
        return dummyData.filter(item => item.title.includes(input) || item.description.includes(input) || item.brand.includes(input));
    }
}

// NOTLAR

// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//


// Bilgisayarımda çalıştırırken TypeScript i desteklemeyen bir editörde 
//hata aldığımdan dolayı online TypeScript editöründe yaptım ve çıktısını aldım.

// Link = https://www.typescriptlang.org/play?ts=4.3.4#code/MYewdgzgLgBAJgVwLZIJ4BECGVMwLwwDaAUDGTAN6nk0CWcAXDAIwA01NZUtUANgKZMARLQAKAC3D8YADiHtO5OPwjAATrQAO3cMICCYGJk2aBMJCABGtMwHdxtYOJi0IMMCCgOwAcxi9aAGtpY1N+eQ5OTQ1gQRgAVgAWAE4FRXhXUAQwKFF+NViczB845gAmADpkgDY0xTVsWl8mRIrq1MiaaBBgQKZkxLrOSwawRhghPRMBCPSYUF4QNSYAcgBxNX5+MBWhmmBsfh8l1GEIJEw1KE1JMBVZ9K9kSzBMG2FxKGuIBgB6X9oFUQKFQACsIOAKqAkL84NhML9oiBEMAoBBfsxfk8kC83rwKqDND4HopaBcSj8iJ10kJPt8-gCgcg0ODIdDYfDEWpkQhUejMcwCUSSXMJnTND9-oDgSyIWAoSAYXCcFyeXyMb9KoTiXsaeLJYyZWC5QqlZykSi0RqAMxCnXUxS0r4ShnS5nGtmKjkqi28q2Y1rakVzJ30qVMkGs+Xs5UI33qzHY3E2O1CB0wAC6kQAvkMqHN6EwyrquDwBMIxLdpAANYNKFTqLQ6MD6QyhMwWax2BxOFxuDxeJp+ALBIzTcIlmDRRxxaopSdwTIgbK5fKFHAlJjlKq1dMNbjNGCtdqT7q9fqDdMjTBjfTjutkBZLVYAIV4mF6u3TBygRxOZwuK4bikCAHxgJNXneMVnQNN1IxNGNzW5S1+SxcRnkg-Eg0nMlihUJgSFFchQxdcMjSjU1vTjZC-VQwVsPTGgSNgiNZU9M0fRohNNVTScmP1V1WI9aMvVjVUUJtXjGOIgSyPdCjEM4tV-V+QNhT4mSYME8iENEpDlNQiC8VTdMsxoXNInzdJCxga1J24Pg4hECQpBgasAGUwOUVQNG0WhdAmAwxzCcwrBsaR7EcZxXHcTxvGHIIQnvSdp1iJgAHZ53TRdVGXHI8gKbYN1KSoaknfchxaNoOjmM8+hgAZJ2vW9AuS78QEWZYYBWAAlfg4C-OYfz-NRTgmc5LmuKtQPs9CcUwj4tLk+D2Ko8TaI1IyUwYgtyXwqkiLIZjtPk3SOOogyNXo9TpKO2TDVO1axPjFStRuw7oLDB6VpE871u420dsO47lrY361pe1C1PtD6Qe+sHKOeriVK2rDhVMnM83TGzLzmBzywmStXOYZgvIbXzm1bYKOzC7sor7WLB18fxEupid01SuIZCyuYcqyfK1yKvCtx3crGkPGRqtPKAenqxqr1GcZJjaoaOufbqNkwVBBvSYbjlGgDJuAu4ZvTVHFq+uCEcUi6JMTObkzRmHrL2ylCOB+6reExH9LtjEpNhz2hIUvSlL9t7naIuGvZDv7IckoGo6DnSnt9jaAwDj2lvh72bf+lGHcwky5jM8gLJoKzSXGeJ7LLJy1kwd8AA9UBgdyymtMmfKbfyW0Cwx3MwJAIGyPxO3CmBIt7GKB3ilnR3bdm5k5pg5xq9I+by1dCqKTcYFK3c5gqw90ql9M6q3eW5mapXB+H0ewKfLr1k2bYdcUPX-3GwCppAsDzc+qRHOscIbI0MoXYyidOC4QpARW6gCWIp3BkjS6ApM5J2zjHM6oDUE8SgSGZOj1kFpwBug0U0dg7YJQX7aGYF+KYMoanMO6c0IYUgejEumNLLY3GIfR4ddhAN2bq3duZQu6Nj8gFSYA8h4j2ZuPOm09+xxSHPPJKYQwIrwSDzDeS4VwFXXMLWyos9zix8EwW0J5z4y3PLIAADE1RWwg75yMjpwJ+r53yfknJ-A238jbTX-hAqCFCkE+2YdxVGZC6CuzgYHBhYS87xzQfgvUCSiHhNtiwiOdDNKW0YcQiJKlAbvSzvkxJocsncVoRpO66SfqZPzuAth20OHpFLmQcu5BK7QN4bXRy+hrwwD0OlcRFNe5UwALLgGgPkfwxgZaaEnj2aKyimYJQXirdIWjrQ6MUJvfRgtd5xFaGVUxB5zFHjPrVGx9UZAOIVjeJW0zIC-jUGBHyWwwDoDJEVXulJmDpR8YcfWY0hDvm0CATQQSWm8AtkArBTCqkF1hdE8gMD9ruwweUjJSSwFXTRY6QhDS8W4JybUhBJ0SWVKaQnUp2KEUFMack1ShLOChNxTSllUSgwY3MljAs4wgVmwERMAAKggXgmhLgwDFaMhc5Me5SKCi82Zah5mQqWVPVZjM54jnUTMFKMQTl7M4AcgWO9ipMHiCYo+ZjrXXPSBfexjinnCFVW8j56gvk-KQH8mZW4a7fhBV-cFCyoUwvmnieFiDOVx3xfbVFqSyAYrdvAjl1L424Oum4gh9TrZcoTXg+l5DiUFqzX7Epua0k4szTgmhbL6G1vLfWlhPK2mKA6TALpZAel0CFf0gmQgABqjgoAIFNrzRVki+7SJgAACVEBqxZyz6YzxUczfVbNNHGpaKamg5rt6GL3tUW16Rj6XMqFYm5sstzFkeS1IQi6vWv2+b8nI-yty411iGvxYbNWRsdjGqlLbqFtuCU7MCqa4llMZRUitLCc25Lqc23OhayWNryXBuNrbSHJvZWWtDCHqmYZQ9hutYHIkQeLu0rhFceFMBkIOpyL4ep6GHQAST0GMpVs6gruXAGAVuYrh2rqUbq1RW7F47pnF+-dSg9EWuPXEU+Zy7UXKLI6xQzryiusfc+08P8xUADcmBQDUAgfgwLfyguEL+AQxnXC90AwtSloMiO4ZRVG1p1aU2xIOrB2NFGSEqSQxSjNoGQuoXJemwjIDKPFNI254BVCosahqbF-NHmEvNO85BvlZcBXWXGOvRQ+MWNsc49xhV3cZ1UwE2AITsrRPaoZrPSTrNpNGtkywRI8myCHoMULPeks1PnvtfvLTnAdP3uvk4iYBnz5GdMzAAAZo3CAVng02dDfZ-gjmIDOdmrC4D7n4tpcTXltl0GAsMqC5FopdEksReyxd4tvmCNZfO49ulH2m3kYe8iqGz24upZ+5dx2NHO10e6QxlgDy8aiqEKx9jXGeN1f7m3QTwmWsrLaxujZBql7bN3b1-rGRcqHMtUY5IZ76gTavaV6bty716aVot2qy2mDrd4Jt6zI0wV7YO0ds2EHTspaRbSiHRd8M3axaWr7YOgcEvw-9+7r3wfveQ8lxFhTleYirdrl7339estV1h9XJupesKu7yzh-LuGCq3GwEVAyJgo6q+jymmOGtNZE2JnV7XN2da2YoLRzA+tM4PYpo9w3Sh2Lp5wC9mnr1OpZywWb6Qb7CA506rn4ELNbaGr+wX-AHNOfAC56NOumWkr9u2j7cvMuoatyysLzeAca9NzF+JLelfW8N+F0HkuWUZd7531vRaG9pnt4Vx3xXWeu6HRx0QmA4DDNoO8mrEjvdzqmCFF6Af8frLUdu7raUydR4U5TpTcfneJ5oMnybqftPp90w+pW+-DXfjL7wBAlxucNsi90hbBaBVtaAGBzNLMfE1Zn5LA-9+B353ES87NMB4D+AoAq8Qlh89drdp8cJ-N5c80+8R8i129x9Ld+8WUe9AsQMu8B8QdFdSDcEx9aCzsqCp9qM7daMHd6MncWA7Il8nIV818YBRBuQvcJlMcv9pAcB0DYBWt10T8pNQ8ohScI9ydBsjkrUM8H9yAn9GdpZb0M82cc9RBH5f9-8uooDgDFBQDwCGAec+d2pOpVh4CPxAgkD9gUCJg5CBBMDjs8txdddmVOCk0S0Yk8I00KC6DJ9s1GCSDcDqCEiJ8ODcFB8O9KDmCG1zcyMsikiwjbcO1OAu1sxiAMwABuYgYgf4GADjYAJoGAF8TfGAAAYXfAgDcFQEwAAC8PxihaAei2iNtDskBBj6BMAajfhwJkAYAABVCzMAAQDQeAKQWIQIGAawdVVbcAQIQ7VASEKYmYpAWVMvfgHYpYjQVgcCNA-w5Y2gGAYzWQs4xzHog4pYy4B4uAKQQwLYtbXY-Y8AGADqfowICoI4sVfgJuWAdyfgS4Xsbo6VLsfgdYzYloi4vY2gA4tQMAZABAIYkEg4ME6oo474u4WIHwMkQY+AeEd8NQcE-4PbC4lwBowwCgcCOua47yHfXua4zma4hoHgIca4p+R42QiDMo-4CFFdRwRo9k8rLk6dZsPk41AUt4C5a4z5bYX1f1SAGALkmPKcfITbY5a41GSUrEF4wY94lkuUjkxyRU2rZUqcVUmAQUi5cCCDGACaK4KAYzTU25C0vwjA20tk+0gQR0nk8AFUmcNUoU3wEU2AkUywy4a4+wh4p4z02FMokk6opoN5dbWIOo8Q5SSgSIcrJgaADQXwKog9JUqQqsocWs8gLRXEnEfIZssgJ-NsywDsyIXxMaRsmsyIGyHsuZAAH29PMybPLLFynOrJ8EiGdTHLUCqJzPzPyELOkA43ch-hcjuBgChN-DGDcBX2RjLP2FgIAH5Kzpzhz1ychNyPxtyAAZcNJZI87YOANwYs88npLQ6nPeFcoYLUt9P1D9GZG89wZ4fIdgB8gs58uosVW4kMz8k8uo3cyafc6QHpWIXgP-OkqCywEADqOEsATsyeMA2gIikigQG8NcvMx8tQLcpCq0w7IEtC78380snpH0qAEzG84i0i+i4gHM4gDc5ixCs85SKYB4npcAsYPQfCpgAACgAEp8AAA+biy0QgSoyIBSuAbCpSuFGAdSrSjCvcqsPSiiwyyE8vdisAEy1SjSvAbSjjey-bCvMAGygypoOAN8zVZysy1y9ywKxZXymgOylCqAYK8ytypCmKyK8gQyl8VAVo2AgAHjFUPOhK-NPMwquGws0pUo8XnKHDUqYDFWSrIFSvSpL2ytyuPK4ukstBKoHNvIXMqtlRqrW38rSsmUwCbh6jMUas4tPJLLapUvdMqmgvbLUG6uqv0qiv6tQEKv4uMzGryvQo8rYt7hKr4pMyYCErorAEWt6rqoAHUqKtrmrTzkL5CSr0zjraKyLzrlqUrVqfkb9Y9jlbr8q6jwqoUSqALlMmAVz3rbLVrIToTVKmhNAEAoAGAhyfBQrHiQB6AGLiBgAOi3BJq-RZKXAkAwhwK0QdKCbNA5K-LFL8KQqmBWq-Q9KLzz0MCEAcT4B3QsAcAcxqiVqxhjLab1L6b1rsKma+0uzWb2ajQubMAKhwDeA3kVKeB+ATiErlakAoQS98A8ACAhA+LjZ7g1KKKcy+a4BPLhdwATK6bWKHLe4xaHRNhx0pbOb4Q5abBFb1aLL1bNadtRptbdahdvKhAjaebqaAr3yrahbAb3z7aWanbDBpbXb5aPbfxVbtLvaBz-aJhpSI0Q7zJebPqxgHr-DI7uqPKkqMxmak9JaE6XacA3aFb8glbU6vbU6faBcs6hBgzMC86y4C7arVqMrOp-qdqRaqx2rYDOqKqqrY7dYZlYBIZ8BPTXA3b+aqwTL1KKLH8a6XSDIG7FaVKXo0aXoFROos6n4NLMA3Alrjb+6+qxg0rWiGqcrxrybUR2qfCUb3qq73F57d6UIl7BwIBV64AN7e76gd7IZ96m7D7kZj7kZ27QVz6S9L7r7eqTbC64ABqhqRqLkR6Wr8b37pqJsIaZ7K7xbHw-7F6CAgGQGwGt79DIGwFoG1AVLYHlJ4HlIKgL0YBMqCAL1UGeqPrOk766r1qTN8H7q9rwADr88Tq3qyGf7LzXl-7aJAGHBgG7LpGnL8LN69wmG97k6YGj6LKT7DrjMs7zHBGb7Q7Ta0rrrwDJHErHqVLnrNjXqbxv6KH5gqGwF1GV7or5D6H9H47VG+QWG2GTGEqT70ys70zrH0HIgw60rvr+ZfrionGOMgbNAQaY8htjlwaYKFrFHvHQAVHqHl7NH-Lsngmj4DGUIIn2HLROHLQgQ8ntC8JeGCBQa48EnhHu1RHoajylawAEakbyrfANLvHHa2ba6QQZaInPa1a27ysKgmgcaEBvIRmxmNLxzJzvbuTxlIR1m-8tn4bEbdn9m26b41mwANmznRmLnwGBmczaiAA5AAeTFRfL0B6mqNqOaLUGUEMHWx6PfFWIgG6LhHmEblcDQJsE30OzAEGIZOmJfCvsCFwHEBvEpPMAwORDpOBPfC7E3yvKaJaIAFEABaMVRwS4EMw7WZMYg894svIIIlxAHwbIBAGAY4Ak3EsYaQSwSVbIRABoBoYk2op+gICAeFgIdVMV5AaFzM38aAQ8xcXgMYtwDqC4Q7YEu4JAAIVFmAN5oeIcZY6QRcQITF2AfqGwP1PVkoTYQIAIRcekuo0YgQMYTfP1b0248AHl3ssAHouZTbQIGwZQIli4V1zfVF6o-wsJ2Kympeu4WwMQ5GWSvR7GmZUiioRYHwFSoQAAKhLdLbLZLfvqwfqt9tbnLbraLeDuzcgFzfzaaYpsBDqqfprcLf1sCTUrUuqLKYhAEDzZAALeLfrbLcrbSphtgEnbLcbaHZbbHbbdRFkpAZneGaEGk37cHZzZHdbYnfnaLenbWuWxgGPZLcXf3f4FHYLZenXbEeWxUpsN3abeHdvcPcvZPbqsGuGrMRMsIbncvevebYPZXYfcpo3dQD-dwaHBUviDfaXfA-He-dPYcYeO-dA4-bvdXaTY7dWow5fcLyQ5vdw6PfndPdSa3nyeKgvZA4HeQ8-Yg4zag7quo6p2UxUuqFI7A+Y9Q8vcreLowKtqw8Y7I9bcg4I6LpirAYHdzJgCAA

let productApi = new ProductApi();

console.log("************ findByCategory ************")
console.log(productApi.findByCategory("smartphones"))

console.log("************ findByText ************")
console.log(productApi.findByText("apple"))

console.log("************ findBySmartTv ************")
console.log(productApi.findBySmartTv(true))

console.log("************ findByMaxRatingAllProduct ************")
console.log(productApi.findByMaxRating(5))

console.log("************ findByWifi ************")
console.log(productApi.findByWifi(true))

console.log("************ findByDiscountPercentage ************")
console.log(productApi.findByDiscountPercentage(6))

console.log("************ findTabletAll ************")
console.log(productApi.findTabletAll())




 