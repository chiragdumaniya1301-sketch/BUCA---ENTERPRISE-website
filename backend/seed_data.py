"""Seed database with BUCA ENTERPRISE products"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

PRODUCTS = [
    # Concrete Cover Blocks
    {
        "id": str(uuid.uuid4()),
        "name": "Multi-Size Cover Blocks (20/25/30/40mm)",
        "category": "cover_blocks",
        "description": "Versatile concrete cover blocks suitable for slabs, beams, columns, and footings.",
        "specifications": "Available in 20mm, 25mm, 30mm, and 40mm sizes",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/qcwgvwoa_1.%2020-25.png",
        "features": ["Multi-purpose", "Accurate dimensions", "Durable concrete", "Easy installation"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "20mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "Ideal for slabs, columns, and beams with pre-attached wire for easy fixing.",
        "specifications": "20mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/bwwm2bzi_2._20_mm_wire.png",
        "features": ["Wire attached", "Quick installation", "Secure fixing", "Quality checked"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "25mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "Perfect for standard RCC work in slabs, columns, and beams.",
        "specifications": "25mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/2n7s4ibq_2._25_mm_wire.png",
        "features": ["Standard size", "Wire attached", "Reliable support", "Easy handling"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "30mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "Suitable for slabs, columns, and beams requiring 30mm cover.",
        "specifications": "30mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/krp6xvb8_2.%2030%20mm%20wire.png",
        "features": ["Wire attached", "Accurate cover", "Strong support", "Long-lasting"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "40mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "For heavy slabs, columns, beams, and footings requiring 40mm cover.",
        "specifications": "40mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/qekt9glb_2.%2040%20mm.png",
        "features": ["Heavy-duty", "Wire attached", "Extra strength", "Stable support"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "50mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "Heavy-duty cover blocks for heavy slabs, columns, beams, and footings.",
        "specifications": "50mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/16mxbmx8_2.%2050%20mm%20wire.png",
        "features": ["Heavy construction", "Wire attached", "Maximum durability", "Secure fixing"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "75mm Wire Attached Cover Block",
        "category": "cover_blocks",
        "description": "Specially designed for footing construction requiring 75mm cover.",
        "specifications": "75mm cover thickness with wire attachment",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/9ge7i1mz_2.%2075%20mm%20wire.png",
        "features": ["Footing specialist", "Extra thick", "Superior strength", "Wire attached"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "50mm Cover Block with Tying Hole",
        "category": "cover_blocks",
        "description": "For heavy slabs, columns, and footings with tying hole for secure fixing.",
        "specifications": "50mm thickness with tying hole, prevents movement",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/v7p5t4v6_1.%2050%20mm%20hole.png",
        "features": ["Tying hole", "Secure fixing", "No movement", "Heavy-duty"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "75mm Cover Block with Tying Hole",
        "category": "cover_blocks",
        "description": "For heavy footings with tying hole ensuring secure fixing and stability.",
        "specifications": "75mm thickness with tying hole, prevents movement",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/r97rc3hm_1.%2075%20mm%20hole.png",
        "features": ["Tying hole", "Maximum stability", "Footing specialist", "Secure fixing"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "40mm Pile Cover Block",
        "category": "cover_blocks",
        "description": "Designed for pile column construction with accurate cover and firm fixing.",
        "specifications": "Overall diameter: 97mm, Centre hole: 17mm, Thickness: 20mm",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/w2xlrhs7_1.%2040%20mm%20pile.png",
        "features": ["Pile specialist", "Accurate cover", "Firm fixing", "Circular design"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "50mm Pile Cover Block",
        "category": "cover_blocks",
        "description": "For pile column construction ensuring accurate 50mm cover with firm fixing.",
        "specifications": "Overall diameter: 114mm, Centre hole: 14mm, Thickness: 20mm",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/wwp9gcgr_1.%2050%20mm%20pile.png",
        "features": ["Pile specialist", "Accurate cover", "Firm fixing", "Standard size"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "75mm Pile Cover Block",
        "category": "cover_blocks",
        "description": "Heavy-duty pile cover for large pile column construction.",
        "specifications": "Overall diameter: 164mm, Centre hole: 14mm, Thickness: 25mm",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/j5jn0fgt_1.%2075%20mm%20pile.png",
        "features": ["Heavy-duty pile", "Accurate cover", "Extra thick", "Firm fixing"]
    },
    # Foundation Blocks
    {
        "id": str(uuid.uuid4()),
        "name": "M25 Grade Foundation Blocks",
        "category": "foundation_blocks",
        "description": "Pre-cast concrete foundation blocks for heavy-duty construction with steel lifting hooks.",
        "specifications": "Dimensions: 600x600x300mm, M25 grade concrete, 25mm diameter pipe sleeves, 10mm diameter steel lifting hook",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/270sh4cf_ChatGPT%20Image%20Mar%2017%2C%202026%2C%2001_30_12%20PM.png",
        "features": ["M25 grade", "Heavy-duty", "Steel lifting hooks", "Pre-cast quality", "Easy handling"]
    },
    # Decorative Products
    {
        "id": str(uuid.uuid4()),
        "name": "Premium Concrete Pen Stand",
        "category": "decorative",
        "description": "Modern industrial design pen stand with excellent strength and handcrafted appearance.",
        "specifications": "Premium concrete, practical compartments, unique textures and finishes",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/l6iqupxv_2.png",
        "features": ["Modern design", "Durable", "Office décor", "Handcrafted look", "Sturdy weight"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Concrete Decorative Tray Set",
        "category": "decorative",
        "description": "Minimalist decorative set with circular/square tray and three geometric succulent pots.",
        "specifications": "Smooth finish, subtle industrial texture, earthy tones, sophisticated design",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/c06266rq_Circle%20with%20pot.jpeg",
        "features": ["Minimalist", "Complete set", "Succulent pots included", "Urban elegance", "Desk centrepiece"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Concrete Flowerpots",
        "category": "decorative",
        "description": "Sleek tapered design flowerpots with weather-resistant finish, available in multiple sizes.",
        "specifications": "Multiple sizes (4-inch to 12-inch), thick walls for thermal insulation, smooth matte finish",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/1fzz7f4q_Flower_Pot.png",
        "features": ["Weather-resistant", "Multiple sizes", "Thermal insulation", "Stable base", "Modern aesthetic"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Concrete Wall Clock",
        "category": "decorative",
        "description": "Minimalist handcrafted wall clock blending rustic charm with modern industrial design.",
        "specifications": "Handcrafted, industrial design, concrete construction",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/j4jcibi3_wall%20clock.jpeg",
        "features": ["Handcrafted", "Industrial design", "Rustic charm", "Wall décor", "Unique piece"]
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Table Top Decor Collection",
        "category": "decorative",
        "description": "Artisan concrete décor set featuring 8 uniquely shaped pieces with vibrant coral-red weathered finish. Perfect for creating stunning table displays with succulents, flowers, or as standalone statement pieces.",
        "specifications": "Set of 8 geometric pieces in varied shapes (cylindrical, hexagonal, octagonal), coral-red weathered finish, multiple size options",
        "image_url": "https://customer-assets.emergentagent.com/job_web-build-26/artifacts/o9rjkvo6_Table%20Top%20Decor.jpeg",
        "features": ["8-piece collection", "Geometric variety", "Vibrant finish", "Multi-purpose use", "Handcrafted look"]
    }
]

async def seed_database():
    """Seed the database with products"""
    try:
        # Clear existing products
        await db.products.delete_many({})
        print("Cleared existing products")
        
        # Insert new products
        result = await db.products.insert_many(PRODUCTS)
        print(f"Inserted {len(result.inserted_ids)} products")
        
        print("\nDatabase seeded successfully!")
        print(f"- Cover Blocks: {len([p for p in PRODUCTS if p['category'] == 'cover_blocks'])}")
        print(f"- Foundation Blocks: {len([p for p in PRODUCTS if p['category'] == 'foundation_blocks'])}")
        print(f"- Decorative Products: {len([p for p in PRODUCTS if p['category'] == 'decorative'])}")
        
    except Exception as e:
        print(f"Error seeding database: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
