import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  slug: string;
  tags: string[];
  badge?: string;
  color: string;
  sizes: string[];
  description: string;
};

@Component({
  selector: 'ic-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly products: Product[] = [
    {
      id: 1, name: 'Nike Air Force 1 Luxe', brand: 'Nike', price: 1799,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1792819499/zansify/products/bviapmbemjbqtd4zbtfj.webp',
      slug: 'nike-air-force-1-luxe', tags: ['sneakers', 'nike', 'featured'], color: 'Black / Cream', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'A rugged, winter-ready take on the classic Air Force 1, finished with premium materials and a confident, boot-inspired profile.'
    },
    {
      id: 2, name: 'Air Max 95 OG Big Bubble', brand: 'Nike', price: 1400,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1792816423/zansify/products/r7wmclwar3fgulw6r7en.jpg',
      slug: 'air-max-95-og-big-bubble', tags: ['sneakers', 'nike', 'sale', 'air max 95'], badge: 'POPULAR', color: 'Neon / Grey', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'The iconic layered runner returns with its signature wave panels and oversized visible Air cushioning.'
    },
    {
      id: 3, name: 'Nike AL8', brand: 'Nike', price: 1340,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778511865/zansify/products/xti3nhea7opnknxdcphk.jpg',
      slug: 'nike-al8', tags: ['sneakers', 'nike', 'new'], badge: 'NEW', color: 'Beige / White', sizes: ['4','5','6','7','8','9','10'],
      description: 'Nineties nostalgia meets everyday comfort in a chunky, easy-to-wear silhouette with breathable mixed materials.'
    },
    {
      id: 4, name: 'Converse Run Star Motion All Star', brand: 'Converse', price: 1350,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778499642/zansify/products/xkjyjyjcmlb4ncbwmkxg.jpg',
      slug: 'converse-run-star-motion-all-star', tags: ['sneakers', 'converse', 'sale'], color: 'Black / White', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A bold reinterpretation of the classic Converse profile, elevated by sculptural lines and an exaggerated platform sole.'
    },
    {
      id: 5, name: 'Converse Chuck Taylor All Star Lugged', brand: 'Converse', price: 1300,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778499146/zansify/products/bzxv7lfj3otqdockscrv.jpg',
      slug: 'converse-chuck-taylor-all-star-lugged', tags: ['sneakers', 'converse'], color: 'Olive / White', sizes: ['4','5','6','7','8','9','10'],
      description: 'The unmistakable Chuck Taylor high-top with a tougher attitude, durable canvas and a chunky lugged outsole.'
    },
    {
      id: 6, name: 'New Balance 2002R Gore-Tex', brand: 'New Balance', price: 1400,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778272434/zansify/products/ndd28tj9r5asjozywowq.webp',
      slug: 'new-balance-2002r-gore-tex', tags: ['sneakers', 'new balance', 'green'], color: 'Green / Grey', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'A technical everyday runner with a considered mix of comfort, protection and understated streetwear style.'
    },
    {
      id: 7, name: 'New Balance 9060', brand: 'New Balance', price: 1399.95,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778251090/zansify/products/td5ioxoyrjvnhfq2whop.jpg',
      slug: 'new-balance-9060', tags: ['sneakers', 'new balance', 'new'], badge: 'NEW', color: 'Grey / Black', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'A futuristic take on the 99X series with sculpted proportions, premium textures and plush cushioning.'
    },
    {
      id: 8, name: 'Adidas Campus Grey', brand: 'Adidas', price: 1250, oldPrice: 2150,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778166359/zansify/products/g6xgh5syemqmxnnicbr9.jpg',
      slug: 'adidas-campus-grey', tags: ['sneakers', 'adidas', 'sale'], badge: '42% OFF', color: 'Grey', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A timeless court-inspired favourite with a clean suede look that fits effortlessly into everyday rotation.'
    },
    {
      id: 9, name: 'Nike Air Uptempo Black', brand: 'Nike', price: 1600, oldPrice: 3400,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778166023/zansify/products/jz4zepa2glat5rvyailm.jpg',
      slug: 'nike-air-uptempo-black', tags: ['sneakers', 'nike', 'sale'], badge: '53% OFF', color: 'Black', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A statement basketball silhouette with oversized details, unmistakable attitude and a full-black finish.'
    },
    {
      id: 10, name: 'Nike Air Force 1 Panda', brand: 'Nike', price: 1299.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778165152/zansify/products/udl9odlqbswo0qrl4q6r.jpg',
      slug: 'nike-air-force-1-panda', tags: ['sneakers', 'nike', 'sale'], color: 'Black / White', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A versatile low-top classic in a crisp monochrome colourway, built for easy everyday wear.'
    },
    {
      id: 11, name: "Nike Dunk Low SP St. John's", brand: 'Nike', price: 1349.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778082673/zansify/products/gwayc61dt00ccqmatsqj.jpg',
      slug: 'nike-dunk-low-sp-st-johns', tags: ['sneakers', 'nike', 'sale', 'new'], badge: 'HOT PICK', color: 'University Red / White', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A standout two-tone Dunk inspired by the original Be True To Your School collection.'
    },
    {
      id: 12, name: 'Nike Dunk Low', brand: 'Nike', price: 1349.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778082477/zansify/products/rsysk4i8y2evl4ofgrkz.jpg',
      slug: 'nike-dunk-low', tags: ['sneakers', 'nike'], color: 'Blue / White', sizes: ['4','5','6','7','8','9','10','11'],
      description: 'A court-born icon with a low-cut profile, durable leather construction and a clean retro feel.'
    },
    {
      id: 13, name: 'Jordan 4 Retro Military Black', brand: 'Jordan', price: 1399.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1778038239/zansify/products/secyztxotmnoxfdqgazj.jpg',
      slug: 'jordan-4-retro-military-black', tags: ['sneakers', 'jordan', 'new'], badge: 'FEATURED', color: 'Military Black', sizes: ['3','4','5','6','7','8','9','10','11'],
      description: 'A legendary mid-top design with signature wings, mesh details and a strong monochrome colour story.'
    },
    {
      id: 14, name: "Air Force 1 '07 Black", brand: 'Nike', price: 949.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1777979028/zansify/products/muodrddtbkasyjhuxx6z.jpg',
      slug: 'air-force-1-07-black', tags: ['sneakers', 'nike', 'sale'], color: 'Black', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'The all-time classic in a versatile black colourway. Clean lines, everyday comfort and timeless appeal.'
    },
    {
      id: 15, name: "Nike Air Force 1 '07 White", brand: 'Nike', price: 949.99,
      image: 'https://res.cloudinary.com/dqk3hlljb/image/upload/v1777963388/zansify/products/zuoqoocd8ajmp1zymlwk.jpg',
      slug: 'nike-air-force-1-07-white', tags: ['sneakers', 'nike', 'sale'], color: 'White', sizes: ['4','5','6','7','8','9','10','11','12'],
      description: 'A staple for every rotation: crisp white leather, subtle detailing and the unmistakable Air Force 1 shape.'
    }
  ];

  readonly filters = ['All products', 'Sneakers', 'Nike', 'Adidas', 'New arrivals', 'Sale'];
  activeFilter = 'All products';
  searchTerm = '';
  sortBy = 'featured';
  selectedProduct: Product | null = null;
  selectedSize = '';
  cartCount = 0;
  cartOpen = false;
  mobileMenuOpen = false;
  newsletterEmail = '';
  newsletterMessage = '';
  toastMessage = '';
  private toastTimer?: ReturnType<typeof setTimeout>;

  get visibleProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();
    let filtered = this.products.filter((product) => {
      const matchesTerm = !term || [product.name, product.brand, product.color, ...product.tags]
        .some((value) => value.toLowerCase().includes(term));
      let matchesFilter = true;
      switch (this.activeFilter) {
        case 'Sneakers': matchesFilter = product.tags.includes('sneakers'); break;
        case 'Nike': matchesFilter = product.brand === 'Nike'; break;
        case 'Adidas': matchesFilter = product.brand === 'Adidas'; break;
        case 'New arrivals': matchesFilter = product.tags.includes('new'); break;
        case 'Sale': matchesFilter = Boolean(product.oldPrice) || product.tags.includes('sale'); break;
      }
      return matchesTerm && matchesFilter;
    });

    if (this.sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (this.sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (this.sortBy === 'name') filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  search(): void {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  focusSearch(): void {
    this.searchTerm = '';
    document.getElementById('store-search')?.focus();
  }

  openProduct(product: Product): void {
    this.selectedProduct = product;
    this.selectedSize = '';
    document.body.classList.add('modal-open');
  }

  closeProduct(): void {
    this.selectedProduct = null;
    document.body.classList.remove('modal-open');
  }

  addToCart(product: Product, size = ''): void {
    if (!size) {
      this.showToast('Choose your size to add this pair.');
      return;
    }
    this.cartCount += 1;
    this.closeProduct();
    this.showToast(`${product.name} · UK ${size} added to your bag`);
  }

  quickAdd(product: Product): void {
    this.openProduct(product);
  }

  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
    this.mobileMenuOpen = false;
  }

  subscribe(): void {
    const email = this.newsletterEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.newsletterMessage = 'Enter a valid email address to join the list.';
      return;
    }
    this.newsletterMessage = 'You’re on the list. Watch this space for the next drop.';
    this.newsletterEmail = '';
  }

  showToast(message: string): void {
    this.toastMessage = message;
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastMessage = '', 3200);
  }

  formatPrice(price: number): string {
    const [whole, cents] = price.toFixed(2).split('.');
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `R ${grouped},${cents}`;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProduct();
    this.cartOpen = false;
    this.mobileMenuOpen = false;
  }
}
